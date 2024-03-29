const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  getAlUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      res.status(400).json({
        error: `Ошибка вывода всех пользователей  ${error.toString()}`,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error: `Ошибка вывода определенного пользователя  ${error.toString()}`,
      });
    }
  },

  registerUser: async (req, res) => {
    try {
      const { login, password, name, lastname, email, tel } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      if (!hash) {
        return res.status(400).json({ error: "Invalid hash" });
      }

      const user = await User.create({
        login,
        password: hash,
        name,
        lastname,
        email,
        tel,
        email,
      });
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error: `Ошибка при регистрации пользователя  ${error.toString()}`,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json({
          error: "Неверный логин",
        });
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({
          error: "Неверный пароль",
        });
      }
      const payload = {
        id: candidate._id,
        log: candidate.login,
        name: candidate.name,
        lastname: candidate.lastName,
        email: candidate.email,
        tel: candidate.tel,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      if (!token)
        res.status(400).json({ error: "Ошибка при получении токена" });

      return res.json({ token });
    } catch (error) {
      res.status(400).json({
        error: `Ошибка при авторизации  ${error.toString()}`,
      });
    }
  },

  addBookmarks: async (req, res) => {
    try {
      const bookmarks = await User.findByIdAndUpdate(req.params.id, {
        $addToSet: {
          bookmarks: req.body.bookmarks,
        },
      });
      return res.json(bookmarks);
    } catch (error) {
      res.status(401).json({
        error: `Ошибка доступа  ${error.toString()}`,
      });
    }
  },
};
