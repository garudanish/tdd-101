import { createProduct } from "../../controller/products";

describe("Product Controller - Create", () => {
  it("createProduct 함수가 있어야 함", () => {
    expect(typeof createProduct).toBe("function");
  });
});
