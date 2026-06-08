const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const profileRoutes = require('./profile.routes');
const audioRoutes = require('./audio.routes');

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/audio', audioRoutes);

module.exports = router;