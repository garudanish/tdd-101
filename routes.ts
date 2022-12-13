import express from "express";
import { hello } from "./controller/products";

const router = express.Router();

router.get("/", hello);

export default router;
