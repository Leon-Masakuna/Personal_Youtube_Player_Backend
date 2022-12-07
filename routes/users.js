const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/users");

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getAllUser);
router.put("/:id", userCtrl.updateOneUser);
router.get("/:id", userCtrl.getOneUser);

module.exports = router;
