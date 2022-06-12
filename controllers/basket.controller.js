const Basket = require("../models/Basket.model");

module.exports.basketContrl = {
  addBasket: async (req, res) => {
    try {
      await Basket.create({
        userId: user._id,
        totalPrice: 0,
        amout: 0,
      });
    } catch (error) {
      res.json({ error: "Ошибка при добавлении корзины" });
    }
  },

  addBookToBasket: async (req, res) => {
    const BookPrice = await Book.findById(req.params.bookId);
    try {
      await Basket.findByIdAndUpdate(req.params.BasketId, {
        $push: {
          bookId: req.body.bookId,
          totalPrice: (totalPrice = totalPrice + BookPrice),
        },
      });
    } catch (error) {
      res.json({ error: "Ошибка при добавлении книги" });
    }
  },

  removeBookForBasket: async (req, res) => {
    const BookPrice = await Book.findById(req.params.bookId);
    try {
      await Basket.findByIdAndUpdate(req.params.BasketId, {
        $pull: {
          bookId: req.body.bookId,
          totalPrice: (totalPrice = totalPrice - BookPrice),
        },
      });
    } catch (error) {
      res.json({ error: "Ошибка при удалении книги" });
    }
  },
};
