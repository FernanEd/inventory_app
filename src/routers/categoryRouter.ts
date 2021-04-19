import { Router } from "express";
import controller from "../controllers/categoryControllers";

const router = Router();

router.get("/", controller.getAllCategories);

export default router;
