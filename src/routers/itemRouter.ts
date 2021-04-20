import { Router } from "express";
import * as controller from "../controllers/itemControllers";

const router = Router();

router.get("/", controller.getAllItems);
router.get("/item/:id", controller.getOneItem);

router.route("/add").get(controller.getAddItem).post(controller.postAddItem);

router
  .route("/edit/:id")
  .get(controller.getEditItem)
  .post(controller.postEditItem);

router
  .route("/delete/:id")
  .get(controller.getDeleteItem)
  .post(controller.postDeleteItem);

export default router;
