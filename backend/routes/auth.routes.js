const express = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
const authController = require('../controllers/auth.controller'); // exemple

module.exports = router;
