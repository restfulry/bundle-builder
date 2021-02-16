const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bundleSchema = new Schema(
  {
    bundleName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, default: 0, required: true },
    discountType: { type: Number, default: 0, required: true },
    discountAmount: { type: Number, default: 0, required: true },
    minNumProducts: { type: Number, default: 0, min: 0 },
    maxNumProducts: { type: Number, default: 0, min: 0 },
    tags: [{ type: String }],
    storeOwner: { type: Schema.Types.ObjectId, ref: "User" },
    requiredProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    eligibleProducts: [
      { type: Schema.Types.ObjectId, ref: "Product", required: true },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bundle", bundleSchema);
