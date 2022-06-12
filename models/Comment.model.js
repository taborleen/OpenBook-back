const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  commentsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comments",
  },
  themeId: {
      type:mongoose.SchemaTypes.ObjectId,
      ref: "Discussion"
  }
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;
