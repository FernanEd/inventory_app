import { Handler } from "express";
import Item from "../models/item";

const getAllCategories: Handler = async (req, res) => {
  try {
    const docs = await Item.find();
    res.status(200).render("items_list", { title: "Items", items: docs });
  } catch (e) {
    res.status(400).end();
  }
};

export default {
  getAllCategories,
};
