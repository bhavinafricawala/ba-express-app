const callBack = (req, res) => {
  console.log(req.query.code);
  console.log(req.query.state);
};

module.exports = {
  callBack,
};
