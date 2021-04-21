import { Handler } from "express";
import Category from "./../models/category";
import Item from "./../models/item";

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

export const getOneCategory: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const one = await Category.findById(id);
    const items = await Item.find({ category: id });
    res.status(200).render("category_detail", {
      title: one.name,
      category: one,
      items,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

// ADD

export const getAddCategory: Handler = async (req, res) => {
  res.render("category_add", { title: "Add a new category" });
};

export const postAddCategory: Handler = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      const created = await Category.create({ name, description });
      res.redirect(`/categories/category/${created._id}`);
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

// EDIT

export const getEditCategory: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description } = await Category.findById(id);
    res.status(200).render("category_edit", {
      title: "Edit category",
      previous_form: { name, description },
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const postEditCategory: Handler = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    if (name && description) {
      const edited = await Category.findByIdAndUpdate(id, {
        name,
        description,
      });
      res.redirect(`/categories/category/${id}`);
    } else {
      res.render("category_edit", {
        title: "Edit category",
        previous_form: { name, description },
        validation_error: "Please fill up the fields",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

// DELETE

export const getDeleteCategory: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const one = await Category.findById(id);
    res.status(200).render("category_delete", {
      title: "Delete category",
      category: one,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const postDeleteCategory: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.redirect("/categories");
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
