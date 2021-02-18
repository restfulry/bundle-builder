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
    const userId = req.body.storeAdmin;

    console.log("USERID", userId);
    console.log("Stores CTRL REQ BODY:", req.body);

    User.findById(userId, async (err, user) => {
      await user.storeOwned.push(storeId);
      await user.save().catch((err) => console.err(err));
      console.log("Stores CTRL User:", user);
    });

    res.status(201).json(store);

    let user1 = User.findById(userId);
    console.log("Stores CTRL AFTER SAVE:", user1);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  index,
  create,
  show,
};
