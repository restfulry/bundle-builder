const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

router.get("/", productsCtrl.index);
router.get("/:id", productsCtrl.show);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth").setUser);
router.post("/", productsCtrl.create);
router.delete("/:id", productsCtrl.delete);
router.put("/:id", productsCtrl.update);

module.exports = router;

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
