var express = require('express');
var router = express.Router();

/* GET novedades. */
router.get('/', function (req, res, next) {
  res.redirect('/admin/login');
});

module.exports = router;
