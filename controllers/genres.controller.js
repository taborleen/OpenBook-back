const Genre = require("../models/Genre.model");

module.exports.genreController = {
    postGenre: async (req, res) => {
        try {
            await Genre.create({
                name: req.body.name,
                description: req.body.description
            });
            res.json("Жанр добавлен");
          } catch (err) {
            res.json(err);
          }
      },
    
      getGenre: async (req, res) => {
        try {
          const genre = await Genre.find({});
          res.json(genre);
        } catch (e) {
          res.json(e);
        }
      },
};