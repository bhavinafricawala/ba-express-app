const UserToken = require("../Model/UserToken");

const getUserTokenByUID = (req, res) => {
  UserToken.findOne({ userId: req.params.userId }, (err, userToken) => {
    if (err) res.send(err);
    else {
      console.log("GetUserTokenByUID call completed successfully!");
      res.json(userToken);
    }
  });
};

const createUserToken = (req, res) => {
  const userToken = new UserToken({
    userId: req.body.userId,
    accessToken: req.body.accessToken,
    refreshToken: req.body.refreshToken,
    idToken: req.body.idToken,
  });
  userToken.save((err, userToken) => {
    if (err) res.send(err);
    else {
      console.log("CreateUserToken call completed successfully!");
      res.json(userToken);
    }
  });
};

module.exports = {
  getUserTokenByUID,
  createUserToken,
};
