import { sequelize } from "../config/db.config.js";
import { Contact } from "../models/contact.model.js";

class ContactRepository {
  db = {};

  constructor() {
    this.db = sequelize;
    // For Development
    this.db.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getContacts() {
    const contacts = await Contact.findAll();
    return contacts;
  }

  async getContact(contactId) {
    const contact = await Contact.findOne({ where: { id: contactId } });
    return contact;
  }

  async createContact(contact) {
    const data = await Contact.create(contact);
    return data;
  }

  async updateContact(contactId, contact) {
    const foundContact = await Contact.findByPk(contactId);

    if (!foundContact) {
      const error = new Error("Could not find contact.");
      error.statusCode = 404;
      throw error;
    }
    await Contact.update(
      { ...contact },
      {
        where: {
          id: contactId,
        },
      }
    );
  }

  async deleteContact(contactId) {
    const foundContact = await Contact.findByPk(contactId);

    if (!foundContact) {
      const error = new Error("Could not find contact.");
      error.statusCode = 404;
      throw error;
    }

    await Contact.destroy({
      where: {
        id: contactId,
      },
    });
  }
}

export default new ContactRepository();
