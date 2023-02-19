const express = require("express");
const { create, store } = require("../controllers/gds.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/create", create);
router.post("/store", store);

module.exports = router;