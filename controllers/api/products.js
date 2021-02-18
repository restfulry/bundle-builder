const Product = require("../../models/product");
const Store = require("../../models/store");

async function index(req, res) {
  const products = await Product.find({});
  res.status(200).json(products);
}

async function show(req, res) {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
}

async function create(req, res) {
  const product = await Product.create(req.body);
  Store.findById(req.params.id, function (err, store) {
    store.products.push(req.body.productId);
    store.save();
  });
  res.status(201).json(product);
}

async function deleteOne(req, res) {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedProduct);
}

async function update(req, res) {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
}

module.exports = {
  index,
  create,
  show,
  delete: deleteOne,
  update,
};
