import express from "express";
import contactController from "../controllers/contact.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/contacts", contactController.getContacts);

router.get("/contact/:id", contactController.getContact);

router.post(
  "/contact",
  [
    body("name").exists().trim().not().isEmpty(),
    body("email")
      .exists()
      .trim()
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
    body("phoneNumber").exists().trim().not().isEmpty().isNumeric(),
  ],

  contactController.createContact
);

router.put(
  "/contact/:id",
  [
    body("name").optional().trim().not().isEmpty(),
    body("email")
      .optional()
      .trim()
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
    body("phoneNumber").optional().trim().not().isEmpty().isNumeric(),
  ],
  contactController.updateContact
);

router.delete("/contact/:id", contactController.deleteContact);

export default router;
