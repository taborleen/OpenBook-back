const { Router } = require("express");
const {
  discussionController,
} = require("../controllers/Discussion.controller");

const router = Router();

router.post("/", commentsController.postComments);
router.get("/", commentsController.getAllComments);
router.get("/:commentId", commentsController.getCommentsById);

module.exports = router;
