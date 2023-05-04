/*
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getContacts=(req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
}

/*
@desc create new contact
@route POST /api/contacts
@access public
*/
const createContact=(req, res) => {
  res.status(201).json({ message: "Create Contact" });
}
/*
@desc Get contact for id
@route GET /api/contacts/:id
@access public
*/
const getContactById=(req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
}
/*
@desc Update contact for id
@route PUT /api/contacts/:id
@access public
*/
const updateContactById=(req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
}
/*
@desc Delete contact for id
@route DELETE /api/contacts/:id
@access public
*/
const deleteContactById=(req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
}

module.exports = {getContacts,createContact,getContactById,updateContactById,deleteContactById}