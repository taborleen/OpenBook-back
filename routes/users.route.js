const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const authmiddleware = require("../middlewares/auth.middleware");
const fileMiddleware = require("../middlewares/file.middleware");

const router = Router();

router.post("/", userController.registerUser);
router.post("/login", userController.login);
router.get("/", userController.getAlUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id/bookmarks", authmiddleware, userController.addBookmarks);
router.patch("/:id/bookmarks/delete", authmiddleware, userController.removeBookmark);
router.patch(
  "/avatar/:id",
  fileMiddleware.single("avatar"),
  userController.editAvatar
);
router.patch("/edit/:id", userController.editUser);
router.patch("/editBuyed/:id", userController.editBuyed);

module.exports = router;
