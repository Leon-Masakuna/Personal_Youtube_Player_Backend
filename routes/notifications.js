const express = require("express");
const router = express.Router();

const notificationCtrl = require("../controllers/notifications");

router.post("/", notificationCtrl.createNotification);
router.get("/", notificationCtrl.getAllNotification);

module.exports = router;
