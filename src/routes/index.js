const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/process-image', imageController.processImage);

module.exports = router;
