import { createProduct } from "../../controller/products";
import productModel from "../../models/Product";
import httpMocks from "node-mocks-http";
import newProduct from "../data/new-product.json";
import { Request, Response } from "express";

productModel.create = jest.fn();

let req: Request;
let res: Response;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("Product Controller - Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("createProduct 함수가 있어야 함", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("ProductModel.create를 호출해야 함", () => {
    createProduct(req, res);
    expect(productModel.create).toBeCalledWith(newProduct);
  });

  it("201 상태 코드를 반환해야 함", () => {
    createProduct(req, res);
    expect(res.statusCode).toBe(201);
    // expect(res._isEndCalled()).toBeTruthy();
  });
});
