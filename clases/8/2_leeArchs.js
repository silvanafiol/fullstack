//recibir el nombre de varios archivos e imprimir el texto concatenado de esos varios archivos, nota: el resultado tiene 
//que ser en el orden q se pasaron los nombres de los archivos

var fs = require('fs')
var obj = {};


function concatenador() {
    var resultado = "";
    var index = 0;
    var contador =2;//variable desacoplada de i

    for (var i = 2 ; i < process.argv.length; i++) {
    
        fs.readFile(process.argv[i],'utf8', function(err, result){

            if (err){
                console.log("Hubo un error: " + err);
                return;
            }
    
            result.toString();
    
            contador++;
            resultado += result;
    
            if(contador == process.argv.length){
                console.log(resultado);
            }
        });
    }
}

concatenador();


