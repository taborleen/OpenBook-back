const {Router} = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router()

router.post("/", commentsController.postComments)
router.get("/", commentsController.getAllComments)
router.get("/:commentId", commentsController.getCommentsById)

module.exports = router