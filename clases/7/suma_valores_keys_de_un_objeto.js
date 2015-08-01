/*
EJERCICIO:
CREAR UNA FX objtenerSuma QUE RECIBA UN OBJETO Y DEVUELVA LA SUMA DE TODOS LOS VALORES DE SUS KEYS
*/

/*
function objtenerSuma(obj1){
	var arr =  Object.keys(obj1);
	var suma = 0;
	while (arr[i] !== undefined){
	 		suma = suma + arr[i];
	 		i++;
	}
	return suma;
}
*/

function objtenerSuma(obj1){
	var arr =  Object.keys(obj1);
	var suma =0;
	var corto = arr.some(function(curEl){
		if (typeof obj1[curEl] === 'number'){
	 		suma = suma + obj[curEl];
	 		return false;
		} else {

			return true;
		}
	});

if (corto) {
	throw new Error ('lalala');
}
	return suma;
}

//var obj ={2:1,4:3,helados:8};
var i = 0;
var obj = {"cuenta1" : 1, "cuenta2" : 2,"cuenta3" : "3","cuenta4" : 4};

console.log(obj);
console.log("Retorna: ", objtenerSuma(obj));
//el foreach retorna undefined pero el some retorna true o false parece
