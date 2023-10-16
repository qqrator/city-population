const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController.js');

router.get('/state/:state/city/:city', cityController.getCity);
router.put('/state/:state/city/:city', cityController.updateCity);

module.exports = router;
