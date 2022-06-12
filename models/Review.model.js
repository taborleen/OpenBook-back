const mongoose = require("mongoose");

const reviewShema = mongoose.Schema({
  text: String,
  grade: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  },
  likes: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ]
});

const Review = mongoose.model("Review", reviewShema);

module.exports = Review;
