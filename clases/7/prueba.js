function objtieneArrayValoresObj(obj1){
	var arrKey =  Object.keys(obj1);
	var arrValores = [];
	arrKey.foreach(function(curEl){
 		arrValores.push(curEl);
	});
	return arrValores;
};

var obj = {"cuenta1" : 1, "cuenta2" : 2,"cuenta3" : "3","cuenta4" : 4};
console.log(obj);
console.log("Retorna: ", objtieneArrayValoresObj(obj));
