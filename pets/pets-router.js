const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send({
        "Output": "Hello World!"
    });
});

router.post('/', function (req, res) {
    res.send({
        "Output": "Hello World!"
    });
});

module.exports = router;