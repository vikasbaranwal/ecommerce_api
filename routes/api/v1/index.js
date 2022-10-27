const express = require('express');
const router = express.Router();

// router for admin and products
router.use('/products',require('./products'));
router.use('/admin',require('./admin'));

module.exports = router;