const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");

const router = Router();

router.post("/", userController.registerUser);
router.post("/login", userController.login);
router.get("/", userController.getAlUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
