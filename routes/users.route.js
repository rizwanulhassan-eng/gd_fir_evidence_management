const express = require("express");
const { index, create } = require("../controllers/user.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/", index);
router.post("/", create);

module.exports = router;