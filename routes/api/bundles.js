const express = require("express");
const router = express.Router();
const bundlesCtrl = require("../../controllers/api/bundles");

router.get("/", bundlesCtrl.index);
router.post("/", bundlesCtrl.create);

module.exports = router;
