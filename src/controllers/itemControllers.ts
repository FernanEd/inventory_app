import { Handler } from "express";
import Item from "../models/item";
import Category from "../models/category";

export const getAllItems: Handler = async (req, res) => {
  try {
    const docs = await Item.find();
    res.status(200).render("item_list", {
      title: "Items",
      items: docs,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const getOneItem: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const one = await Item.findById(id).populate("category").exec();
    res.status(200).render("item_detail", {
      title: one.name,
      item: one,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

// ADD

export const getAddItem: Handler = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("item_add", { title: "Add a new item", categories });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const postAddItem: Handler = async (req, res) => {
  const { name, description, category, price, stock, imgUrl } = req.body;
  try {
    if (name && description && category && price && stock && imgUrl) {
      const created = await Item.create({
        name,
        description,
        category,
        price,
        stock,
        imgUrl,
      });
      res.redirect(`/items/item/${created._id}`);
    } else {
      const categories = await Category.find();
      res.render("item_add", {
        title: "Add a new item",
        categories,
        previous_form: { name, description, category, price, stock, imgUrl },
        validation_error: "Please fill up the fields",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

// EDIT

export const getEditItem: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description } = await Item.findById(id);
    res.status(200).render("category_edit", {
      title: "Edit category",
      previous_form: { name, description },
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const postEditItem: Handler = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    if (name && description) {
      const edited = await Item.findByIdAndUpdate(id, {
        name,
        description,
      });
      res.redirect(`/categories/${id}`);
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

export const getDeleteItem: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const one = await Item.findById(id);
    res.status(200).render("category_delete", {
      title: "Delete category",
      category: one,
    });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const postDeleteItem: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.redirect("/categories");
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
