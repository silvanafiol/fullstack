var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test',function(err,db){
	//el 27017 es el port y test es la base de datos, yo puedo tener conexiones a varias bases 
	//y varias conexiones a la misma base tambien

		//el cursor me permite leer de a uno, pero para leer todo junto hacemos esta opcion

	db.collection('otracoleccion').find({texto:'desde node'}).toArray(function(err,res){
		if(err){
			console.log(err);
			//manejalo!!!
		}

		console.log(err,res);
	});

});