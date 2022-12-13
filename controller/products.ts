import { Request, Response } from "express";
import Product from "../models/Product";

export const createProduct = (req: Request, res: Response) => {
  Product.create(req.body);
  return res.status(201);
};
