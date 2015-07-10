

//ejercicio 5: mediante dos prompt recibir dos cadenas de texto e imprimir la posición en la cual 
//ocurre la segunda cadena en la primera, o imprimir "no se encontró ocurrencia" en caso contrario
//se pide la resolución mediante el uso de indexOf


 var cadenaGrande = prompt("ingrese una cadena de texto");
 var cadenaInterna = prompt("ingrese la cadena del texto interno");


 var Posicion=cadenaGrande.indexOf(cadenaInterna);

 if (Posicion != -1) {
 	console.log("la posición de la segunda cadena en la primera es: " + Posicion);
 }
 else{
 	console.log("no se encontró ocurrencia");
 };