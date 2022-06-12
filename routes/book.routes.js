const { Router } = require("express");
const { bookController } = require("../controllers/Book.controllers");

const routerBook = Router();

routerBook.post("/books", bookController.createBook);
routerBook.get("/books", bookController.getAllBook);
routerBook.get("/books/:id", bookController.getOneBook);
routerBook.get("genre/books/:id", bookController.getBooksOnGenre);

module.exports = routerBook;
