const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");

const router = Router();

router.post("/users", userController.registerUser);
router.post("/login", userController.login);
router.get("/users", userController.getAlUsers);
router.get("/users/:id", userController.getUserById);

module.exports = router;
