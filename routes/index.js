const { Router } = require("express");

const router = Router();

const bookRoutes = require("./book.route");
const genresRoutes = require("./genres.route");
const authorsRoutes = require("./authors.route");
const reviewsRoutes = require("./reviews.route");
const usersRoutes = require("./users.route");
const basketRoutes = require("./basket.route");

router.use("/books", bookRoutes);
router.use("/genres", genresRoutes);
router.use("/authors", authorsRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/users", usersRoutes);
router.use("/basket", basketRoutes);

module.exports = router;
