const { Router } = require("express");
const { authorController } = require("../controllers/authors.controller");

const router = Router();

router.post("/authors", authorController.postAuthor);
router.get("/authors", authorController.getAllAuthors);
router.get("/authors/:id", authorController.getAllAuthorsById);


module.exports = router;