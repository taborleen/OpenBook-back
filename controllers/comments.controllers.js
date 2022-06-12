const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  postComments: async (req, res) => {
    try {
      const { user, text, commentsId } = req.body;
      const createF = await Comment.create({
        user,
        text,
        commentsId,
      });
      res.json(createF);
    } catch (err) {
      console.error;
    }
  },
  getAllComments: async (req, res) => {
    try {
      const getF = Comment.find({});
      res.json(getF);
    } catch (err) {
      console.error(err);
    }
  },
  getCommentsById: async (req, res) => {
    try {
      const getByIdF = await Comment.findById({
        _id: req.params.commentId,
      });
      res.json(getByIdF);
    } catch (err) {
      console.error(err);
    }
  },
};
