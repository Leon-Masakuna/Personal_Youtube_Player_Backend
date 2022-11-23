const express = require("express")
const app = express()
const mongoose = require("mongoose")

const commentRoute = require("./routes/comments")

const port = process.env.PORT  || 8100

mongoose
  .connect(
    "mongodb+srv://irmass98:irmassLeon03@cluster0.qzhdzl0.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use("/api/comment", commentRoute);

app.listen(port, () => {
    console.log(`The application is running on the port ${port}`);
})

