
//hacer un programa que reciba un directorio por parametro e imprima una sola vez por consola 
//los directorios contenidos en esa ruta principal

var fs = require("fs");
var mypath = process.argv.slice(2)[0];
var barra = mypath.substr(2,1);
var i;
var processed = 0;
var strEsDirectorio = "";
console.log("mypath al inicio tiene: " + mypath);
var mypathpar = mypath;

//function directorio(mypathpar){

	fs.readdir(mypathpar, function leeArchivosDirectorio(err1,arrLista){	
		if (err1) {
			console.log("error en fs.readdir: " + err1);
			return;
		}
		function veoSiEsDirectorio(pos){
			return function (err2,stat){
				processed ++;
				if (err2) {
					console.log("error en funcion dentro de veoSiEsDirectorio: " + err2);
					return;
				}
				console.log("dentro de veoSiEsDirectorio el path+archivo a consultar es: " + mypathpar.concat(barra,arrLista[pos]));
				if (stat.isDirectory()){	
					console.log(mypathpar.concat(barra,arrLista[pos]) + "es un directorio!!!! y strEsDirectorio tiene: " + strEsDirectorio);
					strEsDirectorio + arrLista[pos];
					console.log("cargo strEsDirectorio con: " + strEsDirectorio);
				}
				if (processed === arrLista.length) {
					console.log("los directorios son: " + strEsDirectorio);
				}
			} //fxdentro de veoSiEsDirectorio
		}
		for (i = 0 ; i<arrLista.length ; i++){
			fs.stat(mypathpar,veoSiEsDirectorio(i));
		} //for
	}); //fs.readdir

//} //fx directorio

console.log("ppal antes de invocar a directorio(mypath)");
//directorio(mypath);
console.log("ppal despues de invocar a directorio(mypath)");

