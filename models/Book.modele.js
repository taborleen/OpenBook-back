const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genres: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre"
  },
  author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Author"
  },
  description: String,
  price: Number,
  publishingHouse: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Publishing"
  },
  publicationYear: String,
  amountPages: String,
  size: String,
  coverType: String,
  left: Number,
  discount: Number,
  rating: [],
  image: []
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
