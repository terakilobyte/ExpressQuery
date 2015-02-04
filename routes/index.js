var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.send("If you're looking for the canvas, try localhost:3000/draw");
});
router.get('/draw', indexController.index);

module.exports = router;
