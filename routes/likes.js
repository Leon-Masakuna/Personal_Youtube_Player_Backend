const express = require("express");
const router = express.Router();

const likeCtrl = require("../controllers/likes");

router.post("/", likeCtrl.createLike);
router.get("/", likeCtrl.getAllLike);

module.exports = router;
