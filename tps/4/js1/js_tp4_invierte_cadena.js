//Crear un programa que dada una variable cadena, cree una nueva variable e invierta la
//posición de sus caracteres
var cadena1 = prompt("ingrese una cadena de texto");
var cadenaInvertida = "";
var i = cadena1.length;

while ( i > 0) {
	i --;
	cadenaInvertida = cadenaInvertida + cadena1[i];
};

console.log("la cadena invertida es: " + cadenaInvertida);

