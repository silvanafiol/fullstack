var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test',function(err,db){
	//console.log(err,db);
	//ahora vamos a probar los CRUD
	if (err){
		throw new Error('capo, levanta la base');
	}

	db.collection('otracoleccion').insert({texto:'desde node'},function(err){
		if(err){
			console.log(err);
			db.close();
			return;
		}
		console.log('insertó correctamente');
		db.close();
	});
});