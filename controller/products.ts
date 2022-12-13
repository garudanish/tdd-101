import { Request } from "express";
import Product from "../models/Product";

export const createProduct = (req: Request) => {
  Product.create(req.body);
};
