var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/emails', function(req, res, next) {
  const email = req.query;
  console.log(email);
  res.send('respond');
});

module.exports = router;
