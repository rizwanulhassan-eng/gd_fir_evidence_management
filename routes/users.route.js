const express = require("express");
const { index, show, create, update, destroy, verify, verifyPhoneNumber, verifyOTP } = require("../controllers/user.controller");
const { route } = require("../app");
const router = express.Router();

router.get("/", index);
router.get("/show/:id", show);
router.post("/create", create);
router.post("/update/:id", update);
router.get("/destroy/:id", destroy);

router.post("/registration/verify", verify);
router.post("/registration/verify/phoneNumber", verifyPhoneNumber);
router.post("/registration/verify/otp", verifyOTP);

module.exports = router;