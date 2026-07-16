const express = require('express');
const { getUsers, addUser } = require('../controlllers/userController.js');
// const User = require ('../model/User');
// const model = new User;

const router = express.Router();
router.get('/', getUsers)
router.post('/', addUser)

module.exports = router;