const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
