var express = require('express');
var dbConnect = require('../lib/dbConnect');
var router = express.Router();

function respondWithError(res, error) {
	res.json({
		error: {
			message: err.message
		}
	});
}

/* GET users listing. */
router.get('/users', function(req, res, next) {
	dbConnect(function(err, db) {
		if (err) return respondWithError(res, err);
		db.collection('users').find({}).toArray(function(err, users) {
			if (err) return respondWithError(res, err);
			res.json({
			result: users
			});
		});
	});
});

module.exports = router;

// definir una fx u objeto que reciba por parametro datos de la conexion para inicializarla y la creo dentro de api con esos parametros
// y tambien recibe la la app que es el express
// creo  modulo que me crea los endpoints