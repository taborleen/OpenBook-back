const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewController.postReview);
router.get("/reviews/book/:id", reviewController.getRevBookId);
router.patch("/reviews/likes/:id", reviewController.addLike);
router.patch("/reviews/likes/remove/:id", reviewController.delLike);

module.exports = router;
