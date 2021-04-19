import { Handler } from "express";
import Category from "./../models/category";

const getAllCategories: Handler = async (req, res) => {
  try {
    const docs = await Category.find();
    res
      .status(200)
      .render("categories_list", { title: "Categories", categories: docs });
  } catch (e) {
    res.status(400).end();
  }
};

export default {
  getAllCategories,
};
