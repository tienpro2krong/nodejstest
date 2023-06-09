const getHomepage = (req, res) => {
    res.send('Hello World! Tien okkk');
}

const getAbc = (req, res) => {
    res.send('Check ABC');
}

const getTienPro = (req, res) => {
    res.render('sample');
}

module.exports = {
    getHomepage,
    getAbc,
    getTienPro
}