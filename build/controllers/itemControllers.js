"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDeleteItem = exports.getDeleteItem = exports.postEditItem = exports.getEditItem = exports.postAddItem = exports.getAddItem = exports.getOneItem = exports.getAllItems = void 0;
var item_1 = __importDefault(require("../models/item"));
var category_1 = __importDefault(require("../models/category"));
var getAllItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var docs, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, item_1.default.find()];
            case 1:
                docs = _a.sent();
                res.status(200).render("item_list", {
                    title: "Items",
                    items: docs,
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(400).end();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllItems = getAllItems;
var getOneItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, one, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, item_1.default.findById(id).populate("category").exec()];
            case 2:
                one = _a.sent();
                res.status(200).render("item_detail", {
                    title: one.name,
                    item: one,
                });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                res.status(400).end();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getOneItem = getOneItem;
// ADD
var getAddItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, category_1.default.find()];
            case 1:
                categories = _a.sent();
                res.render("item_add", { title: "Add a new item", categories: categories });
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                res.status(400).end();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAddItem = getAddItem;
var postAddItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, description, category, price, stock, imgUrl, created, categories, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, description = _a.description, category = _a.category, price = _a.price, stock = _a.stock, imgUrl = _a.imgUrl;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                if (!(name && description && category && price && stock && imgUrl)) return [3 /*break*/, 3];
                return [4 /*yield*/, item_1.default.create({
                        name: name,
                        description: description,
                        category: category,
                        price: price,
                        stock: stock,
                        imgUrl: imgUrl,
                    })];
            case 2:
                created = _b.sent();
                res.redirect("/items/item/" + created._id);
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, category_1.default.find()];
            case 4:
                categories = _b.sent();
                res.render("item_add", {
                    title: "Add a new item",
                    categories: categories,
                    previous_form: { name: name, description: description, category: category, price: price, stock: stock, imgUrl: imgUrl },
                    validation_error: "Please fill up the fields",
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                e_4 = _b.sent();
                console.log(e_4);
                res.status(400).end();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.postAddItem = postAddItem;
// EDIT
var getEditItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, description, category, price, stock, imgUrl, categories, e_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, item_1.default.findById(id)];
            case 2:
                _a = _b.sent(), name_1 = _a.name, description = _a.description, category = _a.category, price = _a.price, stock = _a.stock, imgUrl = _a.imgUrl;
                return [4 /*yield*/, category_1.default.find()];
            case 3:
                categories = _b.sent();
                res.status(200).render("item_edit", {
                    title: "Edit item",
                    previous_form: { name: name_1, description: description, category: category, price: price, stock: stock, imgUrl: imgUrl },
                    categories: categories,
                });
                return [3 /*break*/, 5];
            case 4:
                e_5 = _b.sent();
                console.log(e_5);
                res.status(400).end();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getEditItem = getEditItem;
var postEditItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, description, category, price, stock, imgUrl, edited, categories, e_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, description = _a.description, category = _a.category, price = _a.price, stock = _a.stock, imgUrl = _a.imgUrl;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                if (!(name && description && category && price && stock && imgUrl)) return [3 /*break*/, 3];
                return [4 /*yield*/, item_1.default.findByIdAndUpdate(id, {
                        name: name,
                        description: description,
                        category: category,
                        price: price,
                        stock: stock,
                        imgUrl: imgUrl,
                    })];
            case 2:
                edited = _b.sent();
                res.redirect("/items/item/" + id);
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, category_1.default.find()];
            case 4:
                categories = _b.sent();
                res.render("item_edit", {
                    title: "Edit item",
                    categories: categories,
                    previous_form: { name: name, description: description, category: category, price: price, stock: stock, imgUrl: imgUrl },
                    validation_error: "Please fill up the fields",
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                e_6 = _b.sent();
                console.log(e_6);
                res.status(400).end();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.postEditItem = postEditItem;
// DELETE
var getDeleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, one, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, item_1.default.findById(id)];
            case 2:
                one = _a.sent();
                res.status(200).render("item_delete", {
                    title: "Delete item",
                    item: one,
                });
                return [3 /*break*/, 4];
            case 3:
                e_7 = _a.sent();
                console.log(e_7);
                res.status(400).end();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getDeleteItem = getDeleteItem;
var postDeleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, item_1.default.findByIdAndDelete(id)];
            case 2:
                _a.sent();
                res.redirect("/categories");
                return [3 /*break*/, 4];
            case 3:
                e_8 = _a.sent();
                console.log(e_8);
                res.status(400).end();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postDeleteItem = postDeleteItem;
