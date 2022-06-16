require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));
app.use(express.static(path.resolve(__dirname, "public")));

mongoose
  .connect("mongodb+srv://user1:admin@cluster0.rqoqm.mongodb.net/open-book")
  .then(() => {
    app.listen(port, () =>
      console.log(`Server has been started, http://localhost:${port}`)
    );
  });
