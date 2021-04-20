import { Handler } from "express";
import Category from "./../models/category";

export const getAllCategories: Handler = async (req, res) => {
  try {
    const docs = await Category.find();
    res.status(200).render("categories_list", {
      title: "Categories",
      categories: docs,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const getAddCategory: Handler = async (req, res) => {
  res.render("category_add", { title: "Add a new category" });
};

export const postAddCategory: Handler = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      const created = await Category.create({ name, description });
      console.log(created);
      res.redirect("/categories");
    } else {
      res.render("category_add", {
        title: "Add a new category",
        previous_form: { name, description },
        validation_error: "Please fill up the fields",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
