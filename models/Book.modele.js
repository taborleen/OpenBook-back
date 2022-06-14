const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genres: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
  },
  description: String,
  price: Number,
  publicationYear: String,
  amountPages: String,
  size: String,
  coverType: String,
  left: Number,
  discount: Number,
  rating: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Review",
  },
  image: [],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
