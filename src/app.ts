import express from "express";
import mongoose from "mongoose";

import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hola");
});

import config from "./utils/config";

export default async () => {
  await mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });
  app.listen(config.PORT, () => {
    console.log(`server started in port ${config.PORT}`);
  });
};
