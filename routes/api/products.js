const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

router.get("/", productsCtrl.index);
router.get("/:id", productsCtrl.show);
router.post("/", productsCtrl.create);
router.delete("/:id", productsCtrl.delete);
router.put("/:id", productsCtrl.update);

module.exports = router;
