const express = require("express");
const router = express.Router();
const storesCtrl = require("../../controllers/api/stores");

router.get("/", storesCtrl.index);
router.get("/:id", storesCtrl.getCurrent);
router.get("/shop/:id", storesCtrl.getCustomerCurrent);
router.post("/", storesCtrl.create);
router.get("/shop/:currentStore", storesCtrl.show);

module.exports = router;
