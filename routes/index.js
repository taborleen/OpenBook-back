const { Router } = require("express");

const router = Router();

// const bookRoutes = require("./book.routes");
const genresRoutes = require("./genres.routes");
const authorsRoutes = require("./authors.routes");
const reviewsRoutes = require("./reviews.routes");
const usersRoutes = require("./users.routes");


// router.use("/books", bookRoutes);
router.use("/genres", genresRoutes);
router.use("/authors", authorsRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
