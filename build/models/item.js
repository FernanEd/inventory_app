"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose_1.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true },
    inStock: { type: String, required: true },
    url: { type: String, required: true },
});
exports.default = mongoose_1.model("Item", ItemSchema);
