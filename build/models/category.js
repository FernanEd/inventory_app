"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});
CategorySchema.virtual("url").get(function () {
    return "/categories/category/" + this._id;
});
exports.default = mongoose_1.model("Category", CategorySchema);
