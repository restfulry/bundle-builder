const User = require("../models/user");
const { createJWT } = require("../config/auth");

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function index(req, res) {
  try {
    const userStore = await Store.findById(req.params.user.userStore[0]);
    res.status(200).json(userStore);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  signup,
  login,
  index,
};
