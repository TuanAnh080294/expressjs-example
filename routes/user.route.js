var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');
var db = require('../db');
var validate = require("../validate/user.validate");

const shortid = require('shortid');

var users = db.get('users').value();

router.get('/', user.index);

router.get('/search', user.search);

router.get('/create',user.create);

router.get('/:id',user.view);

router.post('/create',validate.postCreate, user.postCreate);

module.exports = router;