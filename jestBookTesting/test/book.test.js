const {
  getAllBooksData,
  getBookById,
  addNewBookData,
} = require("../controllers/book.controller");

describe("should return books ", () => {
  // getting all books data
  it("should return all books", () => {
    const bookData = [
      { id: 1, title: "1984", author: "George Orwell" },
      { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
      { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
    ];
    let books = getAllBooksData();
    expect(books.length).toBe(4);
    expect(books).toEqual(bookData);
  });

  // get books data by id
  it("should return books data by id", () => {
    let bookData = { id: 1, title: "1984", author: "George Orwell" };
    let book = getBookById(1);
    expect(book).toEqual(bookData);
  });

  // it check, if book id not found in the list it will throw undefined
  it("should return undefined value if id not found", () => {
    let book = getBookById(123);
    expect(book).toBeUndefined();
  });

  // adding new data to list
  it("should add new book data to list", () => {
    let bookData = { title: "Harry Potter", author: "Harper Snyder" };
    let book = addNewBookData(bookData);
    // expect(book.length).toBe(5);
    expect(book).toEqual({  id: 5,title: "Harry Potter", author: "Harper Snyder" });

    let allbooks = getAllBooksData()
    expect(allbooks.length).toBe(5)

  });
});
