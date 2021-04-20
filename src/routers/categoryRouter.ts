import { Router } from "express";
import * as controller from "../controllers/categoryControllers";

const router = Router();

router.get("/", controller.getAllCategories);

router.get("/add", controller.getAddCategory);

router.post("/add", controller.postAddCategory);

export default router;
