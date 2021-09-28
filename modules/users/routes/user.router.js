const signupController = require("../controller/signup.controller");

const router = require("express").Router();

router.post("/user/signup", signupController);

module.exports = router;
