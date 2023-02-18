const express = require("express");
const { index, show, create, update, destroy, verify, verifyPhoneNumber, verifyOTP, verifyLogin, verifyLoginOTP } = require("../controllers/user.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/", index); //api/users
router.get("/show/:id", show); //api/users/show/1
router.post("/create", create);
router.post("/update/:id", update);
router.get("/destroy/:id", destroy);

router.post("/registration/verify", verify);
router.post("/registration/verify/phoneNumber", verifyPhoneNumber);
router.post("/registration/verify/otp", verifyOTP);

router.post("/login/verify", verifyLogin);
router.post("/login/verify/otp", verifyLoginOTP);

module.exports = router;