


/* imprimir a consola si str1 empieza con una consonante-*/
//salto de linea en la consola lo hago con shift+enter!!!!!

var str1 = "no es una vocal";
var consonantes = "bcdfghjklmnñpqrstvwxyz";

var primerLetra = str1[0];

console.log ("muestro la primera letra antes del loop: " + primerLetra);

for (var i = consonantes.length - 1; i >= 0; i--) {
	if (primerLetra == consonantes[i]) {
		console.log("str1 empieza con consonante " + consonantes[i] + "!!!");
	};
};

console.log("salió del for");