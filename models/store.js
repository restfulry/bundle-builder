const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    storeName: { String, required: true },
    category: { String, required: true },
    description: { String, required: true },
    products: { type: Schema.Types.ObjectId, ref: "Products" },
    bundles: { type: Schema.Types.ObjectId, ref: "Bundles" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", storeSchema);
