//ARRANCAR DEFINIENDO UN ARRAY VACIO Y DESPUES IR AGREGANDO ELEMENTOS HASTA AGREGAR LA 
//CADENA "HASTA" Y AHÍ CORTAR Y MOSTRARLO
var arr1 = Array();
var elemento = "";
do{
	elemento = prompt("ingrese próximo elemento del array, finalice con el dato 'hasta'");
	arr1.push(elemento);
} while (elemento != "hasta");

console.log("El array es: ",arr1);
 