import { createProduct } from "../../controller/products";
import productModel from "../../models/Product";
import httpMocks from "node-mocks-http";
import newProduct from "../data/new-product.json";

productModel.create = jest.fn();

describe("Product Controller - Create", () => {
  it("createProduct 함수가 있어야 함", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("ProductModel.create를 호출해야 함", () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    req.body = newProduct;

    createProduct(req, res);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
