const express = require("express");
const {create, store} = require("../controllers/firs.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/create", create); //api/firs/create
router.post("/store", store);

module.exports = router;