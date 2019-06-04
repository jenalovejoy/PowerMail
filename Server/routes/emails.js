var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/emails', function(req, res, next) {
  res.send('respond');
});

module.exports = router;
