// var db = require("../db");
var User = require("../models/user.model");

module.exports.requireAuth =function(req, res, next) {
    
    var user = User.find({ _id: req.signedCookies.userId });
    if(!req.signedCookies.userId) {
        res.redirect("/auth/login");
        return;
    }

    if(!user) {
        res.redirect("/auth/login");
        return;
    }
    res.locals.user = user;
    next();
};