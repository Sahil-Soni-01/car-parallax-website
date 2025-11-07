import mongoose from "mongoose";

const buyCarSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  carModel: { type: String, required: true }
});

export default mongoose.model("BuyCar", buyCarSchema);
