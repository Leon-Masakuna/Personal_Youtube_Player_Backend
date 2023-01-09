const express = require("express");
const router = express.Router();

const dislikeCtrl = require("../controllers/dislikes");

router.post("/", dislikeCtrl.createDislike);
router.get("/", dislikeCtrl.getAllDislike);
router.delete("/:id", dislikeCtrl.deleteDislike);

module.exports = router;
