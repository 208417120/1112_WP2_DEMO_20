var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const results = await db.query(`select * from card_20`);
    console.log('json data', JSON.stringify(results.rows));
    res.json('card2_20/index', {
      data: results.rows,
      name: '吳昱霆',
      id: '208417120',
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
