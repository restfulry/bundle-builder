const express = require("express");
const router = express.Router();
const storesCtrl = require("../../controllers/api/stores");

router.get("/", storesCtrl.index);
router.get("/:id", storesCtrl.show);
router.post("/", storesCtrl.create);

module.exports = router;
