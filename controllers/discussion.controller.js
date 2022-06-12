const req = require("express/lib/request");
const Discussion = require("../models/Discussion.model");

module.exports.discussionController = {
  postDiscussion: async (req, res) => {
    try {
      const { name, user, answers, watched, text } = req.body;
      const createF = await Discussion.create({
        name,
        user,
        answers,
        watched,
        text,
      });
      res.json(createF);
    } catch (err) {
      console.error(err);
    }
  },
  getDiscussion: async (req, res) => {
    try {
      const getF = await Discussion.find({});
      res.json(getF);
    } catch (err) {
      console.error(err);
    }
  },
  getDiscussionById: async (req, res) => {
    try {
      const getByF = await Discussion.findById({
        _id: req.params.discussionId,
      });
      res.json(getByF);
    } catch (err) {
      console.error(err);
    }
  },
};
