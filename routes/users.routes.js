const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");
const authmiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", userController.registerUser);
router.post("/login", userController.login);
router.get("/", userController.getAlUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id/bookmarks", authmiddleware, userController.addBookmarks);

module.exports = router;
