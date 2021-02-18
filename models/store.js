const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new mongoose.Schema(
  {
    storeName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Products" }],
    bundles: [{ type: Schema.Types.ObjectId, ref: "Bundles" }],
    storeAdmin: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", storeSchema);
