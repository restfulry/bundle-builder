const Store = require("../../models/store");
const User = require("../../models/user");

async function index(req, res) {
  try {
    const allStores = await Store.find({});
    res.status(200).json(allStores);
  } catch (err) {
    res.json({ err });
  }
}

async function show(req, res) {
  const store = await Store.findById(req.params.storeName);
  console.log("controller req params", store);
  res.status(200).json(store);
}

async function create(req, res) {
  try {
    const store = await Store.create(req.body);
    const storeId = store._id;
    console.log("store ctrl", store._id);
    User.findById(req.body.storeAdmin, function (err, user) {
      console.log("user: ", user);
      user.storeOwned.push(storeId);
      console.log("user 2: ", user);
      user.save();
    });
    res.status(201).json(store);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  index,
  create,
  show,
};
