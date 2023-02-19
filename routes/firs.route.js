const express = require("express");
const { view, create, store } = require("../controllers/firs.controller");
const { route } = require("../app");
const router = express.Router();

router.post("/view", view); //api/firs/
router.get("/create", create); //api/firs/create
router.post("/store", store);

module.exports = router;