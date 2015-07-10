

//ejercicio 3:  hacer que mediante un prompt obtenga una cadena de texto, y luego imprima por consola la 
//cantidad de vocales que contiene esta cadena de texto

 var cadena1 = prompt("ingrese la cadena que tiene varias vocales");
 var vocales = "aeiouAEIOUÁÉÍÓÚáéíóú";
 
 var i = 0;
 var cant = 0;
 
 console.log(cadena1);
 console.log(vocales);
 //console.log(i);
 //console.log(cadena1.length);

 while ( i < cadena1.length) {

 	j = 0;
 	while (j < vocales.length) {

	 	//console.log("cadena1 i es" + cadena1[i]);
 		//console.log("vocales j es " + vocales[j]);

 		if (cadena1[i] === vocales[j]){
 			cant = cant +1;
 		};
 		j++;

 	};
 	i++;
 };

 console.log("termina el proceso y conté " + cant + " vocales");



console.log("salió del loop");