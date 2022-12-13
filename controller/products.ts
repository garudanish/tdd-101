import { Request, Response } from "express";

export const createProduct = (req: Request, res: Response): void => {
  console.log(req, res);
};
