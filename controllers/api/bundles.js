const Bundle = require("../../models/bundle");

async function index(req, res) {
  try {
    const bundles = await Bundle.find({});
    res.status(200).json(bundles);
  } catch (err) {
    res.json({ err });
  }
}

async function create(req, res) {
  try {
    const bundle = await Bundle.create(req.body);
    res.status(201).json(bundle);
  } catch (err) {
    res.json({ err });
  }
}

module.exports = {
  index,
  create,
};
