var express =require("express");
var router = express.Router();
var product = require("../controllers/product.controller");

router.get("/",product.getIndex);
router.post("/", product.create);
router.put("/:id", product.update);
router.patch("/:id", product.replace);
router.delete("/:id", product.delete);
module.exports = router;