const Store = require("../../models/store");

async function index(req, res) {
  try {
    const stores = await Store.find({}, "storeName");
    console.log("stores controller find:", stores);
    res.status(200).json(stores);
  } catch (err) {
    res.json({ err });
  }
}

async function show(req, res) {
  const store = await Store.findById(req.params.id);
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
