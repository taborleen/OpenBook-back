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
    default:null
  },
  topicId: {
      type:mongoose.SchemaTypes.ObjectId,
      ref: "Discussion",
      default:null
  }
});


const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;
