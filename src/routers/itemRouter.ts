import { Router } from "express";
import controller from "../controllers/itemControllers";

const router = Router();

router.get("/", controller.getAllCategories);

export default router;
