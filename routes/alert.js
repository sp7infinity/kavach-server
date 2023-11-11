const express = require('express');
const { alert } = require('../controllers/alert');

const router = express.Router();

router.post('/', alert);

module.exports = router;