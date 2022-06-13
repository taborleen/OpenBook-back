const Author = require("../models/Author.model");

module.exports.authorController = {
  postAuthor: async (req, res) => {
    try {
      const createAuthor = await Author.create({
        name: req.body.name,
        description: req.body.description,
        photo: req.body.photo,
      });
      res.json(createAuthor);
    } catch (error) {
      res.json({ error: "Ошибка создания автора" });
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const Authors = await Author.find({});
      res.json(Authors);
    } catch (error) {
      res.json({ error: "Ошибка вывода авторов" });
    }
  },

  getAllAuthorsById: async (req, res) => {
    try {
      const AuthorById = await Author.find({}).populate("bibliography");
      res.json(AuthorById);
    } catch (error) {
      res.json({ error: "Ошибка вывода всех авторов" });
    }
  },
};
