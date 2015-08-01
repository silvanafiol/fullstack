/*
 PasarVocalesAMayusculas.js recibe como parámetro el nombre del archivo de minúsculas.doc, lo lee, 
 lepasa todas sus vocales a mayúsculas en el mismo orden, sin cambiar las palabras y lo escribe en 
 un archivo nuevo.
*/

var fsMin = require('fs');
var fsMay = require('fs');
var archMin = process.argv[2];
var archMay = process.argv[3];
var textoArchMin = "";
var textoArchMax = "";
var letra = "";

function PasarVocalesAMayusculas() {   
    fsMin.readFile(archMin  , 'UTF8', function vaAEscribirArchivo(err1, data) {
        if (err1) {
          console.log("error en fs.readFile: " + err1);
          return;
        }

        textoArchMin = data.toString();

        for (var i = 0; i< textoArchMin.length; i++) {
            if ( textoArchMin[i] === "a" || textoArchMin[i] === "e" || textoArchMin[i] === "i" || textoArchMin[i] === "o" || textoArchMin[i] === "u"){
                letra = textoArchMin[i].toUpperCase();
            } else {
                letra = textoArchMin[i];
            }
            textoArchMax += letra;
        } //for

        fsMay.writeFile(archMay, textoArchMax, function(err2) {
            if (err2) {
              console.log("error en fs.writeFile: " + err2);
              return;
            }
            console.log("el texto del archivo de salida es: "+ textoArchMax);
        });
    });
}
 
 PasarVocalesAMayusculas();
 console.log("despues de invocar a la fx ppal");