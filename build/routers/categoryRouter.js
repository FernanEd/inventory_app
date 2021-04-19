"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoryControllers_1 = __importDefault(require("../controllers/categoryControllers"));
var router = express_1.Router();
router.get("/", categoryControllers_1.default.getAllCategories);
exports.default = router;
