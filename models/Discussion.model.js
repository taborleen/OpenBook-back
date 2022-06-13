const mongoose = require("mongoose");

const discussionsSchema = mongoose.Schema({
  name: String,
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  answers: [
      {
          ref: "Comment",
          type: mongoose.SchemaTypes.ObjectId,
          default:null
      }
  ],
  watched: [
    {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
        default: null

    }
  ], // функция должна быть реализована через user
  text: String,
});

const Discussion = mongoose.model("Discussion", discussionsSchema);

module.exports = Discussion;
