const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect("");
  console.log("DB connection is working");
};

connection();

// mongoose docs: https://mongoosejs.com/docs/guide.html

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

// https://mongoosejs.com/docs/models.html (look at constructing documents)
app.post("/books", (request, response) => {});

// https://mongoosejs.com/docs/api/model.html#Model.find()
app.get("/books", (request, response) => {});

app.get("/books/getfirstbook", (request, response) => {});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", (request, reponse) => {});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
