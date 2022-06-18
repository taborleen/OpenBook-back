const Basket = require("../models/Basket.model");
const Book = require("../models/Book.modele");

module.exports.basketContrl = {
  addBasket: async (req, res) => {
    try {
      await Basket.create({
        userId: req.user.id,
      });
    } catch (error) {
      res.json({ error: "Ошибка при добавлении корзины" });
    }
  },

  addBookToBasket: async (req, res) => {
    try {
      const BookPrice = await Book.findById(req.body.bookId);
      const basket = await Basket.findById(req.params.id);
      const totalPrice = basket.totalPrice + BookPrice.price;

      const result = await Basket.findByIdAndUpdate(req.params.id, {
        $addToSet: {
          totalPrice,
          bookId: req.body.bookId,
          totalPrice,
        },
      });
      return res.json(result);
    } catch (error) {
      res.json({ error: "Ошибка при добавлении книги" });
    }
  },

  removeBookForBasket: async (req, res) => {
    const BookPrice = await Book.findById(req.body.bookId);
    const basket = await Basket.findById(req.params.id);
    const totalPrice = basket.totalPrice - BookPrice.price;

    try {
      const result = await Basket.findByIdAndUpdate(req.params.id, {
        $pull: {
          bookId: req.body.bookId,
          totalPrice,
        },
      });
      return res.json(result);
    } catch (error) {
      res.json({ error: "Ошибка при удалении книги" });
    }
  },

  clearBasket: async (req, res) => {
    try {
      const result = await Basket.findByIdAndUpdate(req.params.id, {
        bookId: [],
        totalPrice: 0,
      });
      return res.json(result);
    } catch (error) {
      res.json({ error: "Ошибка при очистки корзины" });
    }
  },

  buy: async (req, res) => {
    try {
      const result = await Basket.findByIdAndUpdate(req.params.id, {
        bookId: [],
        totalPrice: 0,
      });

      return res.json(result);
    } catch (error) {
      res.json({ error: "Ошибка при очистки корзины" });
    }
  },
};
