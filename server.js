const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
