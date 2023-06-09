const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! Tien okkk');
})

router.get('/abc', (req, res) => {
    res.send('Check ABC');
})

router.get('/tienpro', (req, res) => {
    // res.send('<h1 style="color: blue">Tien Pro</h1>')
    res.render('sample');
})

module.exports = router;