

//ejercicio 6: mediante dos prompt recibir dos cadenas de texto, recibir también un tercer texto
// que indique si buscamos desde el ppio o desde el final, y luego imprimir si se encontró al ppio
// o al final o si no se encontró en ninguna de esas dos posiciones


 var cadenaGrande = prompt("ingrese una cadena de texto");
 var cadenaInterna = prompt("ingrese la cadena del texto interno");
 var sentido = prompt("ingrese el sentido de búsqueda (I: inicial/F:final/otra letra sera tomada como F:Final)");
 var posicion;
 var flagEncontro = "N";

 if (sentido =="I") {
 	if ( cadenaGrande.indexOf(cadenaInterna) == 1 ){
 		console.log("la cadena está al ppio");
 		flagEncontro = "S";
 	};
 }
 else{
 	if ( cadenaGrande.lastIndexOf(cadenaInterna) == cadenaGrande.length-1 ){
 		console.log("la cadena está al final");
 		flagEncontro = "S";
 	};
 };

 if flagEncontro != "S" {
 	console.log("No se encontró en ninguna de las dos posiciones");
 }
