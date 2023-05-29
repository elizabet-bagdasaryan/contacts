import contactRepository from "../repositories/contact.repository.js";

class ContactService {
  async getContacts() {
    return await contactRepository.getContacts();
  }

  async getContact(contactId) {
    return await contactRepository.getContact(contactId);
  }

  async createContact(contact) {
    return await contactRepository.createContact(contact);
  }

  async updateContact(contactId, contact) {
    return await contactRepository.updateContact(contactId, contact);
  }

  async deleteContact(contactId) {
    return await contactRepository.deleteContact(contactId);
  }
}

export default new ContactService();
