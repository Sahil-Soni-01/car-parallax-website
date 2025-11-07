import express from "express";
import BuyCar from "../models/BuyCar.js";

const router = express.Router();

// ✅ POST route — save new order
router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, carModel } = req.body;

    if (!fullName || !email || !phone || !carModel) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newOrder = new BuyCar({ fullName, email, phone, carModel });
    await newOrder.save();

    res.status(200).json({ message: "Buy car details saved successfully!" });
  } catch (error) {
    console.error("Error saving buy car data:", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
});

// ✅ NEW GET route — view all orders
router.get("/", async (req, res) => {
  try {
    const orders = await BuyCar.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching buy car data:", error);
    res.status(500).json({ message: "Error fetching data: " + error.message });
  }
});

export default router;
