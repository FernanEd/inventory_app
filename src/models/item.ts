import { Schema, model, Types } from "mongoose";

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Types.ObjectId, ref: "Category" },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

ItemSchema.virtual("url").get(function (this: any) {
  return `/items/item/${this!._id}`;
});

export default model("Item", ItemSchema);
