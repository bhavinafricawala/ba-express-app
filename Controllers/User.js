const User = require("../Model/User");

const getUser = (req, res) => {
  User.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};

const createUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      console.log(Object.entries(user).length);
      if (Object.entries(user).length > 0) {
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
      } else res.json(User);
    }
  );
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};

const findUserByEmail = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
