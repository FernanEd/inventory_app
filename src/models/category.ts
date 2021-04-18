import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
});

export default model("Category", CategorySchema);
