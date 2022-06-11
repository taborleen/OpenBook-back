const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.post("/genres", genreController.postGenre);
router.get("/genres", genreController.getGenre);


module.exports = router;