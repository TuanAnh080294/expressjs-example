// var db = require("../db.js");
var User = require("../models/user.model");
var md5 = require("md5");

// async function getUser() {
// 	var user = await User.find();
// 	return user;
// }

module.exports.login = function (req, res) {
    res.render('../views/auth/login');
};

module.exports.postLogin = async function (req, res) {
    var error = [];
    var user = await User.find({ email: req.body.email });
    
    if (!user) {
        res.render("../views/auth/login", {
            error: "User doesn't exists"
        });
        return;
    }

    if(user[0].password !== md5(req.body.password)) {
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