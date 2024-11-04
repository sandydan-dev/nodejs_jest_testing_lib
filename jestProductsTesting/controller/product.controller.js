const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Coffee Maker", category: "Appliances" },
  { id: 3, name: "Headphones", category: "Electronics" },
  { id: 4, name: "Running Shoes", category: "Footwear" },
];

function getAllProducts() {
  return products;
}

function getAllProductById(id) {
  return products.find((item) => item.id === id);
}

function addNewProducts(items) {
  let newProducts = { id: products.length + 1, ...items };
  products.push(newProducts);
  return newProducts;
}

module.exports = { getAllProducts, getAllProductById, addNewProducts };
