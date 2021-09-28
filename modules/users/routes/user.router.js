const router = require("express").Router();

const signupController = require("../controller/signup.controller");
const signinController = require("../controller/signin.controller");
const getUsersController = require("../controller/getUsers.controller");

const {
  addUserSchema,
  singInSchema,
} = require("../../../validation/user.validation");
const requestValidation = require("../../../validation/vaildationFactoryFun");

const isAuthorized = require("../../../authorization/isAuthorized");

router.get("/users", isAuthorized(["user"]), getUsersController);

router.post(
  "/user/signup/",
  requestValidation(addUserSchema),
  signupController
);

router.post("/user/signin/", requestValidation(singInSchema), signinController);

module.exports = router;
