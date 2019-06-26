var db = require("../db.js");
var md5 = require("md5");

module.exports.login = function (req, res) {
    res.render('../views/auth/login');
};

module.exports.postLogin = function (req, res) {
    var error = [];
    var user = db.get("users").find({ email: req.body.email }).value();
    if (!user) {
        res.render("../views/auth/login", {
            error: "User doesn't exists"
        });
        return;
    }

    if(user.password !== md5(req.body.password)) {
        res.render('../views/auth/login', {
            error: "Password wrong"
        });
        return;
    }

    res.cookie("userId", user.id, {
        signed: true
    });
    res.redirect("/user");

}; 