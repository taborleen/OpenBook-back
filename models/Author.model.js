const mongoose = require("mongoose");

const authorShema = mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  bibliography: [
    {
      ref: "Book",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Author = mongoose.model("Author", authorShema);

module.exports = Author;
