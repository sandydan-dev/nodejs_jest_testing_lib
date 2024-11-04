const {
  getAllProducts,
  getAllProductById,
  addNewProducts,
} = require("../controller/product.controller");

describe("products function", () => {
  // get all products
  it("should return all products", () => {
    let productData = [
      { id: 1, name: "Laptop", category: "Electronics" },
      { id: 2, name: "Coffee Maker", category: "Appliances" },
      { id: 3, name: "Headphones", category: "Electronics" },
      { id: 4, name: "Running Shoes", category: "Footwear" },
    ];
    let result = getAllProducts();
    expect(result.length).toEqual(4);
    expect(result).toEqual(productData);
  });

  // get products by id
  it("should return product by id", () => {
    let productData = { id: 1, name: "Laptop", category: "Electronics" };
    let result = getAllProductById(1);
    expect(result).toEqual(productData);
  });

  // check if id is not found showing undefined
  it("should return undefined if id is not found", () => {
    let result = getAllProductById(1234);
    expect(result).toBeUndefined();
  });

  // add new products
  it("should add new product", () => {
    let newProduct = {
      name: "John Doe",
      category: "Software Engineer",
    };
    let result = addNewProducts(newProduct);
    expect(result).toEqual({
      id: 5,
      name: "John Doe",
      category: "Software Engineer",
    });
  });
});
