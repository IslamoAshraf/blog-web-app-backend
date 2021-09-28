const router = require("express").Router();

const signupController = require("../controller/signup.controller");

const { addUserSchema } = require("../../../validation/user.validation");
const requestValidation = require("../../../validation/vaildationFactoryFun");

router.post("/user/signup/", requestValidation(addUserSchema), signupController);
router.post("/user/signin/");

module.exports = router;
