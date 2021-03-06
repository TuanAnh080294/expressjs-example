// var express = require('express');
// var db = require('../db');
// var users = db.get('users').value();
// const shortid = require('shortid');

var User = require("../models/user.model.js");


module.exports.index = async function(req, res) {
	var users = await User.find();
	res.render('../views/user/user', {
		users: users
	});
};

module.exports.search = async function(req, res) {
	var q = req.query.q;
	var users = await User.find();
	var queryMatches = await users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
	});
	res.render('../views/user/user', {
		users: queryMatches,
		query: q
	});
};

module.exports.create = function(req, res) {
	console.log(req.cookies);
	res.render('user/create');
};

module.exports.postCreate = async function(req, res) {
	avatar = req.file.path.split('\\').slice(1).join('/');
	var user = new User({ name: req.body.name, avatar: avatar, phone: req.body.phone  });
	await users.save();
	// console.log(res.locals);
	res.cookie("id","123456");
	res.redirect('/user');
};

module.exports.view = async function(req, res) {
	var ObjectId = require('mongoose').Types.ObjectId;
	var id = req.params.id;
	var user = await User.find({ _id: new ObjectId(id) });
	res.render('user/view', {
		user: user[0]
	});
};