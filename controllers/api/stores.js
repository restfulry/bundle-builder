const Store = require("../../models/store");
const User = require("../../models/user");
const { createJWT } = require("../../config/auth");

async function index(req, res) {
  try {
    const allStores = await Store.find({});
    res.status(200).json(allStores);
  } catch (err) {
    res.json({ err });
  }
}

async function getCurrent(req, res) {
  try {
    console.log("STORES CTRL GETCURRENT: ", req);
    const currentStore = await Store.findById(req.params.id);
    res.status(200).json(currentStore);
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
    const userId = req.body.storeAdmin;

    User.findById(userId, (err, user) => {
      user.storeOwned.push(storeId);
      user
        .save()
        .then((user) => {
          const token = createJWT(user);
          res.status(201).json({ store, token });
        })
        .catch((err) => console.err(err));
    });
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  index,
  create,
  show,
  getCurrent,
};
