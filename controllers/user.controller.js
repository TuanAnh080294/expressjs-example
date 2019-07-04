// var express = require('express');
// var db = require('../db');
// var users = db.get('users').value();
// const shortid = require('shortid');
var User = require("../models/user.model");

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.render('../views/user/user', {
		users: users
	});
};

module.exports.search = async function(req, res) {
	var q = req.query.q;
	var queryMatches = await User.find({ name: q });
	res.render('../views/user/user', {
		users: queryMatches,
		query: q
	});
};

module.exports.create = function(req, res) {
	console.log(req.cookies);
	res.render('user/create');
};

module.exports.postCreate = function(req, res) {
	var user = req.body;
	user.id = shortid.generate();
	user.avatar = req.file.path.split('\\').slice(1).join('/');
	db.get('users').push(user).write();
	// console.log(res.locals);
	res.cookie("id","123456");
	res.redirect('/user');
};

module.exports.view = function(req, res) {
	var id = req.params.id;
	var user = db.get('users').find( {id: id}).value();
	res.render('user/view', {
		user: user
	});
};