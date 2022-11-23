const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comments");

router.post("/", commentCtrl.createComment);
router.get("/", commentCtrl.getAllComment);
router.get("/:id", commentCtrl.getOneComment);
router.put("/:id", commentCtrl.addSubComment);

module.exports = router;