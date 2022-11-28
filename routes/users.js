const express = require('express');
const router = express.Router();

const userCtrl = require("../controllers/users");

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getAllUser);


module.exports = router;