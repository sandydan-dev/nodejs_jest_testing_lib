const express = require("express");
const app = express();
const port = 3000;

const {
  getAllBooksData,
  getBookById,
  addNewBookData,
} = require("./controllers/book.controller");


// middelwars
app.use(express.json())

// endpoint  to get all books
app.get("/books", (req, res) => {
  let books = getAllBooksData();
  res.status(200).json(books);
});

// endpoint is get book by id
app.get("/books/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = getBookById(id);
  res.status(200).json(response);
});

// endpoint is  add new book
app.post("/books/new", (req, res) => {
  let book = req.body;
  let response = addNewBookData(book);
  res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
