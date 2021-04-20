import { Router } from "express";
import * as controller from "../controllers/categoryControllers";

const router = Router();

router.get("/", controller.getAllCategories);

router.get("/:id", controller.getOneCategory);

router.get("/add", controller.getAddCategory);

router.post("/add", controller.postAddCategory);

router.get("/edit/:id", controller.getEditCategory);

router.post("/edit/:id", controller.postEditCategory);

router.get("/delete/:id", controller.getDeleteCategory);

router.post("/delete/:id", controller.postDeleteCategory);

export default router;
