//dado un array, retorna los valores que son pares

function buscaPares_EarlyReturn(arr1){
	var arrRes = [];
	var i = 0;

	//area de chequeo de parámetros
	if (! Array.isArray(arr1)) {
		throw new Error("Expected arr to be an array but instead got " + typeof arr1);
	};

	//area de código propio de la función
	while (i<arr1.length) {
		if (arr1[i]%2==0) {
			arrRes.push(arr1[i]);
		}
		i++;
	};

return arrRes;
}

var miArr = [1,2,3,4];
var res;
try{
	res = buscaPares_EarlyReturn(miArr);
	//acá ya puedo estar tranquilo que lo que tengo son valores válidos!!!!!
	console.log(res);
}
catch(e) {
	//acá se hacen rollbacks, cierre de conexiones a BD, etc.
	console.log("Tuve un error y lo manejé, el error fue: " + e.message);
};
