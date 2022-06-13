const { Router } = require("express");
const {
  discussionController,
} = require("../controllers/Discussion.controller");

const router = Router();

router.post("/", discussionController.postDiscussion);
router.get("/", discussionController.getDiscussion);
router.get(
  "/:discussionId",
  discussionController.getDiscussionById
);
router.patch("/add/answers/:discussionId", discussionController.addAnswer);
router.patch("/add/watched/:discussionId", discussionController.addWatched)

module.exports = router;
