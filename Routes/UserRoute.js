const express = require('express');
const UserControllers = require('../Controllers/UsersController')

const router = express.Router();

router.route('/register').post(UserControllers.regist)

router.route('/login').post(UserControllers.login)


module.exports = router;