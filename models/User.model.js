const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  tel: String,
  bookmarks: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
    },
  ],
  buyed: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Basket",
    },
  ],
  login: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", userShema);

module.exports = User;
