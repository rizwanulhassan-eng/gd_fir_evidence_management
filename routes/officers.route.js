const express = require("express");
const { index, show, update, destroy, verifyLogin, verifyLoginOTP } = require("../controllers/officer.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/", index); //api/officers
router.get("/show/:id", show); //api/officers/show/1
router.post("/update/:id", update);
router.get("/destroy/:id", destroy);

router.post("/login/verify", verifyLogin);
router.post("/login/verify/otp", verifyLoginOTP);

module.exports = router;
