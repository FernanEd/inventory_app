import { Schema, model, Types } from "mongoose";

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Types.ObjectId, ref: "Category" },
  price: { type: Number, required: true },
  inStock: { type: String, required: true },
  url: { type: String, required: true },
});

export default model("Item", ItemSchema);
