const books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// get all books data
function getAllBooksData() {
  return books;
}

// get book by id
function getBookById(id) {
  return books.find((book) => book.id === id);
}

// add new book data

function addNewBookData(book) {
  let newBook = { id : books.length + 1, ...book};
  books.push(newBook);
  return newBook;
}

module.exports = {
  getAllBooksData,
  getBookById,
  addNewBookData,
};
