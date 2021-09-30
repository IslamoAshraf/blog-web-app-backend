const router = require("express").Router();

const signupController = require("../controller/signup.controller");
const signinController = require("../controller/signin.controller");
const getUsersController = require("../controller/getUsers.controller");
const updateUserController = require("../controller/updateuser.controller");
const updatepasswordController = require("../controller/updatepassword.controller");
const deactivateUser = require("../controller/deactivateuser.controller");

const {
  addUserSchema,
  singInSchema,
  updateUserSchema,
  updatePasswordSchema,
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

router.patch(
  "/user/update/:id",
  isAuthorized(["user","admin"]),
  requestValidation(updateUserSchema),
  updateUserController
);

router.patch(
  "/user/updatepassowrd/:id",
  isAuthorized(["user"]),
  requestValidation(updatePasswordSchema),
  updatepasswordController
);

router.get("/user/deactivate/:id", isAuthorized(["user"]), deactivateUser);
module.exports = router;
