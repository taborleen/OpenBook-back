const Author = require("../models/Author.model");

module.exports.authorController = {
  
  postAuthor: async (req, res) => {
    try {
      await Author.create({
        name: req.body.name,
        description: req.body.description
      });
      res.json("Автор добавлен");
    } catch (err) {
      res.json(err);
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const Authors = await Author.find({})
      res.json(Authors);
    } catch (err) {
      res.json(err);
    }
  },

  getAllAuthorsById: async (req, res) => {
    try {
      const AuthorById = await Author.find({}).populate("bibliography");
      res.json(AuthorById);
    } catch (err) {
      res.json(err);
    }
  },
};
