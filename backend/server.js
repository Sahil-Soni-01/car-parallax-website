import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import contactRoutes from "./routes/contactRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import buyCarRoutes from "./routes/buyCarRoutes.js";


dotenv.config({ path: "./.env" });
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/buy", buyCarRoutes);
app.get("/", (req, res) => {
  res.send("✅ Backend API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
