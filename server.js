const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const commentRoute = require("./routes/comments");
const userRoute = require("./routes/users");

const port = process.env.PORT || 8100;

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.qzhdzl0.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/comment", commentRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`The application is running on the port ${port}`);
});
