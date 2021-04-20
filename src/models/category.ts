import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

CategorySchema.virtual("url").get(function (this: any) {
  return `/categories/category/${this!._id}`;
});

export default model("Category", CategorySchema);
