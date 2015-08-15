var express = require('express');
var router = express.Router();
/* esto es lo que agregamos en el ejercicio */
var users = {
	user1:{
		name:'pepe',
		email:'pepe@gmail.com'
	},
	user2:{
		name:'pablo',
		email:'pablo@gmail.com'
	}
};

router.get('/:userId',function(req,res,next){/* con esto le digo que es variable y accedo a lo que viene*/
	//res.render('user',{/*mandar name y email que correspondan
	//al user de la solicitud*/
	
	if (users[req.params.userId] === undefined){
		//res.json('usuario no definido');
		// res.render('user',{error:'ponete las pilas '});
		 res.render('userErr',{error:'ponete las pilas '});
	}
	
	//});
//json es para responder en forma de json y render es para mostrar una vista, o uso json o uso render
//	res.json({ 
		res.render('user',{
			id:req.params.userId,
			name:users[req.params.userId].name,
			email:users[req.params.userId].email
		});
//	});

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
