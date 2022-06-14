const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  postComments: async (req, res) => {
    try {
      const { user, text, commentsId, topicId } = req.body;
      const createF = await Comment.create({
        user,
        text,
        commentsId,
        topicId,
      });
      res.json(createF);
    } catch (err) {
      console.error({err: 'Ошибка при создании комментариев'});
    }
  },
  getAllComments: async (req, res) => {
    try {
      const getF = await Comment.find({}).populate('commentsId topicId');
      res.json(getF);
    } catch (err) {
      console.error({err: 'Ошибка при получении комментариев'});
    }
  },
  
  getCommentsById: async (req, res) => {
    try {
      const getByIdF = await Comment.findById({
        _id: req.params.commentId,
      });
      res.json(getByIdF);
    } catch (err) {
      console.error({err: 'Ошибка при получении комментариев через id'});
    }
  },
};
