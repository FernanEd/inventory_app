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
    res.status(400).end();
  }
};

export const getAddCategory: Handler = async (req, res) => {
  res.render("category_add", { title: "Add a new category" });
};

export const postAddCategory: Handler = async (req, res) => {
  res.send("lol");
};
