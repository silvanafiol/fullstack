var Mongo = require('mongodb').MongoClient;

var db;

/**
 * @param {String}	strConnection
 * @param {Function}	callback(Error|null, Object|undefined)
 */
module.exports = function dbConnect(strConnection, callback) {

	if (db) {
		return setInmediate(function() {
			callback(null, db);
		});
	}

	Mongo.connect(strConnection, function(err, connection) {
		//metodos para accedeer a la bd
		//crer un obj con un monton de fx que van a acceder a la base de datos
		//uno de los metodos va a ser init
		if (err) {
			return callback(err);
		}

		db = connection;

		callback(null, db);
	}); 
};
