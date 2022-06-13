const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.post("/", genreController.postGenre);
router.get("/", genreController.getGenre);


module.exports = router;