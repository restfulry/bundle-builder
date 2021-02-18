const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, default: 0, required: true },
    tags: { type: String },
    productStore: { type: Schema.Types.ObjectId, ref: "Store" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
