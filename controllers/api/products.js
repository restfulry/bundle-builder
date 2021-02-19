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
  try {
    const product = await Product.create(req.body);
    console.log("Product CTRL Product: ", product);

    const productId = product._id;

    Store.findById(req.body.productStore, (err, store) => {
      console.log("CTRL Store", store);
      store.products.push(productId);
      store.save();
      res.status(201).json(product);
    });
  } catch (err) {
    res.json({ err });
  }
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
