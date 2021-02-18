const Store = require("../../models/store");

async function index(req, res) {
  try {
    const allStores = await Store.find({});
    console.log("allStores controller find:", allStores);
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
