const express = require("express");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE

// const response = await fetch("http://someaddress.com"); // sends GET request

// HTTP Verb GET

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books: ", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/getfirstbook", (request, response) => {
  // get te first book
  console.log("/books/books: ", request.path);
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  console.log("title: ", request.body.title);
  console.log("genre: ", request.body.genre);
  console.log("author: ", request.body.author);

  fakeArr.push(request.body);

  let awesome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awsome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.put("/books", (request, reponse) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // change (update) the author to an new name
});

app.delete("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // remove (delete) the element from the array
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
