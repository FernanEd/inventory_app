import express from "express";
import mongoose from "mongoose";
import path from "path";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("../views/layout.pug");
});

import config from "./utils/config";

export default async () => {
  await mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(config.PORT, () => {
    console.log(`server started in port ${config.PORT}`);
  });
};
