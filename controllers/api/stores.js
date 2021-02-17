const User = require("../../models/user");

async function index(req, res) {
  try {
    const stores = await User.find({}, "storeName");
    console.log("stores controller find:", stores);
    res.status(200).json(stores);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  index,
};
