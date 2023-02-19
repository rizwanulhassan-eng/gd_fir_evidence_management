const express = require("express");
const { index, create, store } = require("../controllers/gds.controller");
const { route } = require("../app");
const router = express.Router();

router.post("/", index);
router.get("/create", create);
router.post("/store", store);

module.exports = router;