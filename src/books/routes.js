const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook } = require("./controllers");

// https://mongoosejs.com/docs/models.html (look at constructing documents)
// Add a single book to the db
bookRouter.post("/books/addBook", addBook);

//anatomy of a route

// bookRouter.httpMethod(route, function)

module.exports = bookRouter;
