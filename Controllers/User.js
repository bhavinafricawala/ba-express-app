const User = require("../Model/User");

const getUser = (req, res) => {
  User.find((err, users) => {
    if (err) res.send(err);
    console.log("GetUser called completed successfully!");
    res.json(users);
  });
};

const createUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      if (typeof object !== "undefined" && object !== null) {
        res.json({ isExist: true });
      } else {
        const user = new User({
          email: req.body.email,
          password: req.body.password,
        });
        user.save((err, user) => {
          if (err) {
            res.send(err);
          }
          console.log("CreateUser call completed successfully!");
          res.json(user);
        });
      }
    }
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $set: {
        email: req.body.email,
        password: req.body.password,
      },
    },
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      } else {
        console.log("CreateUser call completed successfully!");
        res.json(User);
      }
    }
  );
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userID })
    .then(() => {
      console.log("DeleteUser call completed successfully!");
      res.json({ message: "User Deleted" });
    })
    .catch((err) => res.send(err));
};

const findUserByEmail = (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        res.send(err);
      } else {
        console.log("FindUserByEmail call completed successfully!");
        res.json(user);
      }
    }
  );
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
