const Book = require("../models/Book.modele");

module.exports.bookController = {
    createBook: async (req, res) => {
      
        const {name, genres, author, description, price, publicationYear, amountPages, size, coverType, left, discount, rating, image} = req.body;
  
        try {
          const book = await Book.create({
            name,
            genres,
            author,
            description,
            price,  
            publicationYear, 
            amountPages, 
            size, 
            coverType, 
            left, 
            discount, 
            rating, 
            image
          });
          return res.json(book);
        }
  
        catch(e) {
          return res.json("ошибка")
        }
        
    },
  
    getAllBook: async (req, res) => {
      try {
        const book = await Book.find({}).populate('genres author publishingHouse');
        res.json(book); 
      } catch (error) {
        res.json({ error: "Ошибка при вызове" });
      }
    },
  
    getOneBook: async (req, res) => {
      try {
        const book = await Book.findById(req.params.id).populate('genres author publishingHouse');
        res.json(book);
      } catch (error) {
        res.json({ error: "Ошибка при вызове" });
      }
    },
    getBooksOnGenre: async (req, res) => {
        try{
            const book = await Book.find({
                genres: req.params.id
            }).populate("genres author publishingHouse");
            res.json(book)
        } catch (error) {
            res.json({error: "ошибка при просмотре книг определенного жанра"});
        }
    }
  };