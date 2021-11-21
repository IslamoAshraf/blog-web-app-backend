const router = require("express").Router();
//User controller
const signupController = require("../controller/signup.controller");
const signinController = require("../controller/signin.controller");
const getUsersController = require("../controller/getUsers.controller");
const updateUserController = require("../controller/updateuser.controller");
const updatepasswordController = require("../controller/updatepassword.controller");
const deactivateUser = require("../controller/deactivateuser.controller");

//User schema joe validation middleware
const {
  addUserSchema,
  singInSchema,
  updateUserSchema,
  updatePasswordSchema,
  deleteUserSchema,
} = require("../../../validation/user.validation");
const requestValidation = require("../../../validation/vaildationFactoryFun");

//Authorization middleware
const isAuthorized = require("../../../authorization/isAuthorized");
const deleteUser = require("../controller/deleteuser.controller");
const verifyUser = require("../controller/verifyuser.controller");

//Get all users route
router.get("/users", isAuthorized(["user"]), getUsersController);

//Signup user route
router.post(
  "/user/signup/",
  requestValidation(addUserSchema),
  signupController
);

//Signin user route
router.post("/user/signin/", requestValidation(singInSchema), signinController);

//Verify user route
router.get("/verify/:token", verifyUser);

//Update user route
router.patch(
  "/user/update/:id",
  isAuthorized(["user"]),
  requestValidation(updateUserSchema),
  updateUserController
);

//Update user password route
router.patch(
  "/user/updatepassowrd/:id",
  isAuthorized(["user"]),
  requestValidation(updatePasswordSchema),
  updatepasswordController
);

//Deactivate user route
router.get("/user/deactivate/:id", isAuthorized(["user"]), deactivateUser);

//Delete user route
router.delete(
  "/user/delete/:id",
  requestValidation(deleteUserSchema),
  isAuthorized(["user"]),
  deleteUser
);

module.exports = router;
