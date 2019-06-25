var express = require("express");
var router = express.Router();
var auth = require("../controllers/auth.controller");

router.get("/login", auth.login);

router.post("/login", auth.postLogin);
module.exports = router;