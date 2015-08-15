var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test',function(err,db){
	//el 27017 es el port y test es la base de datos, yo puedo tener conexiones a varias bases 
	//y varias conexiones a la misma base tambien

	//console.log(err,db);
	//ahora vamos a probar los CRUD
	var cursor = db.collection('otracoleccion').find({texto:'desde node'});
	cursor.on('data',function(data){
		console.log(data);
	});
	//cursor.on porque ese on es porque estoy escuchando eventos...
	//'data' es por definicion, porque asi como end, yo tengo que levantar lo que trae el cursor 
	//especificamente con 'data', en cambio el data de la funcion, ese es mi nombre del parametro

	cursor.on('error',function(err){
		console.log(err);
		//y manejate!!!
	})
	cursor.on('end',function(){
		db.close();
	});
	//cuando mis eventos me dicen que terminó la info del cursor, recien ahi cierro la conexion

	//el cursor me permite leer de a uno, pero para leer todo junto hacemos esta opcion


});