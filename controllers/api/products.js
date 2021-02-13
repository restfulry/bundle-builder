const Product = require("../../models/product");

async function index(req, res) {
  const products = await Product.find({});
  res.status(200).json(products);
}

async function show(req, res) {
  const product = await Puppy.findById(req.params.id);
  res.status(200).json(puppy);
}

module.exports = {
  index,
  show,
};
