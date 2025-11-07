import express from "express";
import Login from "../models/Login.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newLogin = new Login({ email, password });
    await newLogin.save();
    res.json({ success: true, message: "✅ Login details saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allLogins = await Login.find();
    res.json(allLogins);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
