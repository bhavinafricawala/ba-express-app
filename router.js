const { callBack } = require("./Controllers/TeslaCallBack");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
} = require("./Controllers/User");
//const auth = require("./middleware/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ value: "Let's build a CRUD API!" });
});

router.get("/user", getUser);
router.post("/user", createUser);
router.post("/user/findbyemail", findUserByEmail);
router.put("/user/:userID", updateUser);
router.delete("/user/:userID", deleteUser);
router.get("/callback", callBack);

module.exports = router;
