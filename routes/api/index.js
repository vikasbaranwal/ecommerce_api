const express = require('express');
const router = express.Router();

// router for version
router.use('/v1',require('./v1'));

module.exports = router;