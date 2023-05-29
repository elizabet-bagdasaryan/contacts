import { validationResult } from "express-validator";
import contactService from "../services/contact.service.js";

class ContactController {
  async getContacts(req, res, next) {
    try {
      const data = await contactService.getContacts();
      return res.json({ status: "success", data });
    } catch (error) {
      next(error);
    }
  }

  async getContact(req, res, next) {
    try {
      const id = req.params.id;
      const data = await contactService.getContact(id);
      return res.json({ status: "success", data });
    } catch (error) {
      next(error);
    }
  }

  async createContact(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const error = new Error("Validation failed.");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
      }
      const body = req.body;
      const data = await contactService.createContact(body);
      return res.status(201).json({ status: "success", data });
    } catch (error) {
      next(error);
    }
  }

  async updateContact(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const error = new Error("Validation failed.");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
      }
      const id = req.params.id;
      const body = req.body;

      const data = await contactService.updateContact(id, body);
      return res.status(200).json({ status: "success", data });
    } catch (error) {
      next(error);
    }
  }

  async deleteContact(req, res, next) {
    try {
      const id = req.params.id;
      const data = await contactService.deleteContact(id);
      return res.status(200).json({ status: "success", data });
    } catch (error) {
      next(error);
    }
  }
}

export default new ContactController();
