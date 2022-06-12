const { Router } = require("express");
const { basketContrl } = require("../controllers/basket.controller");

const router = Router();

router.post("/", basketContrl.addBasket);
router.patch("/add", basketContrl.addBookToBasket);
router.patch("/delete", basketContrl.removeBookForBasket);
router.patch("/clear", basketContrl.clearBasket);

module.exports = router;
