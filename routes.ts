import express from "express";
import { createProduct } from "./controller/products";

const router = express.Router();

router.post("/", createProduct);

export default router;
