const { Router } = require("express");
const { basketContrl } = require("../controllers/basket.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, basketContrl.addBasket);
router.patch("/add/:id", authMiddleware, basketContrl.addBookToBasket);
router.patch("/delete/:id", basketContrl.removeBookForBasket);
router.patch("/clear/:id", basketContrl.clearBasket);
router.patch("/buy/:id", basketContrl.buy);
module.exports = router;
