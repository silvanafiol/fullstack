
//hacer un programa que reciba un directorio por parametro e imprima una sola vez por consola 
//los directorios contenidos en esa ruta principal


var fs = require("fs");
var mypath = process.argv[2];
var pth = require('path');
var i;
var processed = 0;
var arrLista = [];
var arrResult = [];

function directorio(mypath){

	fs.readdir(mypath, function leeArchivosDirectorio(err1,arrLista){	
		if (err1) {
			console.log("error en fs.readdir: " + err1);
			return;
		}
	
		for (i = 0 ; i<arrLista.length ; i++){
			var absFilename = pth.join(mypath,arrLista[i]);
			fs.stat(absFilename, function veoSiEsDirectorio(err2, result){

				processed ++;
				if (err2) {
					console.log("error en funcion dentro de veoSiEsDirectorio: " + err2);
					return;
				}
				if (result.isDirectory()){	
					arrResult.push(absFilename);
				}
				if (processed === arrLista.length) {
					console.log("los directorios son: " + arrResult);
				}

			});
		} //for
	}); //fs.readdir

} //fx directorio

directorio(mypath);
