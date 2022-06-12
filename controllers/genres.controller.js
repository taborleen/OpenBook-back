const Genre = require("../models/Genre.model");

module.exports.genreController = {
    postGenre: async (req, res) => {
        try {
            const createGenre = await Genre.create({
                name: req.body.name,
                description: req.body.description
            });
            res.json(createGenre);
          } catch (error) {
            res.json({error: 'Ошибка добвления жанра'});
          }
      },
    
      getGenre: async (req, res) => {
        try {
          const genre = await Genre.find({});
          res.json(genre);
        } catch (error) {
          res.json({error: 'Ошибка вывода жанров'});
        }
      },
};