var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
//aca va a haber todas rutas de get y devuelven el renderizado de un template

//las rutas de api devuelven json y no tienen views y tienen los verbos de http put, delete, get, post