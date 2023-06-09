const express = require('express');
const {getHomepage, getAbc, getTienPro} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/tienpro', getTienPro);

module.exports = router;