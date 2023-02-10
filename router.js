const { callBack } = require("./Controllers/TeslaCallBack");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
  getUserById,
} = require("./Controllers/User");
const {
  getUserTokenByUID,
  createUserToken,
} = require("./Controllers/UserToken");
//const auth = require("./middleware/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ value: "Let's build a CRUD API!" });
});

//User
router.get("/user", getUser);
router.get("/user/:userID", getUserById);
router.post("/user", createUser);
router.post("/user/findbyemail", findUserByEmail);
router.put("/user/:userID", updateUser);
router.delete("/user/:userID", deleteUser);

//UserToken
router.get("/userToken/:userId", getUserTokenByUID);
router.post("/userToken", createUserToken);

router.get("/callback", callBack);

module.exports = router;
