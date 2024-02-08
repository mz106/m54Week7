const Book = require("./model");

const addBook = async (request, response) => {
  try {
    // Add a single book to the db
    console.log("request.body: ", request.body);
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("book: ", book);
    response.send({ message: "success book created", book: book });
  } catch (error) {
    response.send({ message: "it's gone pete tong", error: error });
  }
};

module.exports = {
  addBook: addBook,
};
