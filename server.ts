import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import dotenv from "dotenv";

const GLOBAL_VARIABLES = dotenv.config().parsed || {};

const PORT = 4000;

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(GLOBAL_VARIABLES.MONGO_URI || "");

app.use(express.json());

app.use("/", routes);

app.listen(PORT);

console.log(`Running on port ${PORT}`);
