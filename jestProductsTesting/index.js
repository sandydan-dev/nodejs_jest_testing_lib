const express = require("express");
const app = express();
const port = 3000;

const {
  getAllProducts,
  getAllProductById,
  addNewProducts,
} = require("./controller/product.controller");

app.use(express.json());

// get all products
app.get("/products", (req, res) => {
  let response = getAllProducts();
  res.status(200).json(response);
});

app.get("/products/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = getAllProductById(id);

  res.status(200).json(response);
});

app.post("/products/new", (req, res) => {
  let newProduct = req.body;
  let response = addNewProducts(newProduct);
  res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
