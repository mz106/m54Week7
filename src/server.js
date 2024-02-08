require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

// mongoose docs: https://mongoosejs.com/docs/guide.html

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

// const objTwo = {
//   thing: "stuff",
//   beans: "toast",
// };

// const myObj = {
//   name: "z",
//   isAwesome: true,
//   objTwo: objTwo,
// };

// https://mongoosejs.com/docs/api/model.html#Model.find()
app.get("/books/getAllBooks", async (request, response) => {
  // get all books from the db
  const books = await Book.find({}); // sends request to db and gets back response

  await logTypeOfResult(books);

  response.send({ message: "success all the books", books: books }); // this is sent to client BEFORE response gets back from db
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", (request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
