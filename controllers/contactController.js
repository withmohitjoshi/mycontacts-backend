const asyncHandler = require("express-async-handler");
/*
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

/*
@desc create new contact
@route POST /api/contacts
@access public
*/
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotatry BAD_REQUEST");
  }
  res.status(201).json({ message: "Create Contact" });
});

/*
@desc Get contact for id
@route GET /api/contacts/:id
@access public
*/
const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

/*
@desc Update contact for id
@route PUT /api/contacts/:id
@access public
*/
const updateContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

/*
@desc Delete contact for id
@route DELETE /api/contacts/:id
@access public
*/
const deleteContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
