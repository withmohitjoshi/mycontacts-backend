const express = require("express");
const {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").get(getContactById);
router.route("/:id").put(updateContactById);
router.route("/:id").delete(deleteContactById);

module.exports = router;
