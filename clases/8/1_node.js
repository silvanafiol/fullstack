//escribir un programa que devuelva la suma de todos los paremetros que recibe el proceso node
//usar console.log(process.argv)

var arg=process.argv;
var suma = 0;

for (i=2; i<arg.length;i++){

	suma += Number(arg[i]);
}



console.log('el resultado es ' + suma);