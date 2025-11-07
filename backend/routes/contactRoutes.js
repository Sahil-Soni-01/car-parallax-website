import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: "✅ Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allContacts = await Contact.find();
    res.json(allContacts);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
