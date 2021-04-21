import { Router } from "express";
import * as controller from "../controllers/categoryControllers";

const router = Router();

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

export default router;
