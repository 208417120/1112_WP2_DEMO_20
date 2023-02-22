var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_20/index', { name: '吳昱霆', id:'208417120' });
});

module.exports = router;
