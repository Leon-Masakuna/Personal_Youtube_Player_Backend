const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const Comments = require("./models/comments");
const Likes = require("./models/like");
const Dislikes = require("./models/dislike");
const Notification = require("./models/notifications");

const commentRoute = require("./routes/comments");
const userRoute = require("./routes/users");
const likeRoute = require("./routes/likes");
const dislikeRoute = require("./routes/dislikes");
const notificationRoute = require("./routes/notifications");

const port = process.env.PORT || 8100;

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.qzhdzl0.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

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

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //send comments to the client
  socket.on("getComments", () => {
    Comments.find()
      .sort({ createdAt: -1 })
      .then((comment) => {
        // console.log("comments : ", comment);
        socket.emit("receiveComments", comment);
      })
      .catch((error) => socket.emit("receiveComments", error));
  });

  //get comments from the client
  socket.on("commentSend", (comment) => {
    console.log("commentaires : ", comment);
    const comments = new Comments(comment);
    comments.save().then(() => socketIO.emit("commentResponse", comment));
  });

  //send likes to the client
  socket.on("getLikes", () => {
    Likes.find()
      .sort({ createdAt: -1 })
      .then((like) => {
        // console.log("likess : ", like);
        socket.emit("receiveLikes", like);
      })
      .catch((error) => socket.emit("receiveLikes", error));
  });

  //get likes from the client
  socket.on("likeSend", (like) => {
    console.log("likes : ", like);
    const likes = new Likes(like);
    likes.save().then(() => socketIO.emit("likeResponse", like));
  });

  //get deleted like from the client
  /* socket.on("likeDeleted", (deletelike) => {
    Likes.deleteOne(deletelike.id).then(() =>
      socketIO.emit("likeResponse", deletelike)
    );
  }); */

  //send dislikes to the client
  socket.on("getDislikes", () => {
    Dislikes.find()
      .sort({ createdAt: -1 })
      .then((like) => {
        // console.log("likess : ", like);
        socket.emit("receiveDislikes", like);
      })
      .catch((error) => socket.emit("receiveDislikes", error));
  });

  //get dislikes from the client
  socket.on("dislikeSend", (like) => {
    console.log("dislikes : ", like);
    const dislikes = new Dislikes(like);
    dislikes.save().then(() => socketIO.emit("dislikeResponse", like));
  });

  //send notications to the client
  socket.on("getNotifications", () => {
    Notification.find()
      .sort({ createdAt: -1 })
      .then((notification) => {
        // console.log("likess : ", notification);
        socket.emit("receiveNotifications", notification);
      })
      .catch((error) => socket.emit("receiveNotifications", error));
  });

  //get notifications from the client
  socket.on("notificationSend", (notification) => {
    console.log("notifications : ", notification);
    const notications = new Notification(notification);
    notications
      .save()
      .then(() => socketIO.emit("notificationResponse", notification));
  });

  //Listen when user disconnecting
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.use(express.json());

app.use("/api/comment", commentRoute);
app.use("/api/user", userRoute);
app.use("/api/like", likeRoute);
app.use("/api/dislike", dislikeRoute);
app.use("/api/notification", notificationRoute);

http.listen(port, () => {
  console.log(`The application is running on the port ${port}`);
});
