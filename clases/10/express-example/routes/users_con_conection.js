var express = require('express');
var router = express.Router();
var Mongo = require('mongodb').MongoClient;
Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
    //las rutas
    router.get('/:username', function(req, res, next) { /* con esto le digo que es variable y accedo a lo que viene*/

        db.collection('<users></users>').find({
            username: req.params.username
        }).toArray(function(err, dbres) { //dbres es un ARRAY!!!!!!!!
            if (err) {
                console.log(err);
                //manejalo!!!
                return;
            }

            if (dbres === undefined || dbres.length === 0) {
                res.render('userErr', {
                    error: 'ponete las pilas '
                });
                return; //SUPER IMPORTANTE PARA QUE NO SIGA LA EJECUCION!!!!! OJO!!!!
            }

            //paso las key-value del objeto a la vista para user.hbs, es un objeto user, con keys name y email
            res.render('userConConection', {
                username: dbres[0].username,
                name: dbres[0].name,
                email: dbres[0].email
            });
        });

    });

    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

});
/*
[
		username:'usuario1',
		name:'pepe',
		email:'pepe@gmail.com'
	},
	{
		username:'usuario2',
		name:'pepe',
		email:'pepe@gmail.com'
	},
	{
		username:'usuario3',
		name:'pepeaaa',
		email:'pepeaa@gmail.com'
	},
]

        /* GET users listing. */


module.exports = router;