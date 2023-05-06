const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
/*
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
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
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

/*
@desc Get contact for id
@route GET /api/contacts/:id
@access public
*/
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).catch((error) => {
    if (error) {
      res.status(404);
      throw new Error("Contact not found");
    }
  });
  res.status(200).json(contact);
});

/*
@desc Update contact for id
@route PUT /api/contacts/:id
@access public
*/
const updateContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).catch((error) => {
    if (error) {
      res.status(404);
      throw new Error("Contact not found");
    }
  });
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotatry BAD_REQUEST");
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
    name,
    email,
    phone,
  });
  res.status(200).json(updatedContact);
});

/*
@desc Delete contact for id
@route DELETE /api/contacts/:id
@access public
*/
const deleteContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).catch((error) => {
    if (error) {
      res.status(404);
      throw new Error("Contact not found");
    }
  });
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedContact);
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
