const { Router } = require("express");
const { authorController } = require("../controllers/authors.controller");

const router = Router();

router.post("/", authorController.postAuthor);
router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAllAuthorsById);

module.exports = router;
