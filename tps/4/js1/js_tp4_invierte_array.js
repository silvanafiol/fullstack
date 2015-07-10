//Crear un programa que dada un variable arr, cree una nueva variable e invierta la posición de
//sus elementos.

var arr1 = Array("a","b","c","d","e","f");
var arr2 = Array();
console.log(arr1);
console.log(arr2);

var i = arr1.length;

while (i>0) {
	i--;
	arr2.push(arr1[i]);
};

console.log("el array invertido es", arr2);

