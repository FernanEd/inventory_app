"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose_1.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imgUrl: { type: String, required: true },
});
ItemSchema.virtual("url").get(function () {
    return "/items/item/" + this._id;
});
exports.default = mongoose_1.model("Item", ItemSchema);
