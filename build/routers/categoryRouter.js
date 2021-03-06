"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller = __importStar(require("../controllers/categoryControllers"));
var router = express_1.Router();
router.get("/", controller.getAllCategories);
router.get("/category/:id", controller.getOneCategory);
router.get("/all", controller.getAllItems);
router
    .route("/add")
    .get(controller.getAddCategory)
    .post(controller.postAddCategory);
router
    .route("/edit/:id")
    .get(controller.getEditCategory)
    .post(controller.postEditCategory);
router
    .route("/delete/:id")
    .get(controller.getDeleteCategory)
    .post(controller.postDeleteCategory);
exports.default = router;
