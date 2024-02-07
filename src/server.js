const express = require("express");

const app = express();

app.use(express.json());

app.get("/books", (request, response) => {});

app.get("/books/getfirstbook", (request, response) => {});

app.post("/books", (request, response) => {});

app.put("/books", (request, reponse) => {});

app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
