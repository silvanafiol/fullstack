

//ejercicio 2: hacer que mediante prompt obtena una cadena e imprima por 
//consola la posición de la primera vocal

 var cadena1 = prompt("ingrese la cadena que tiene alguna vocal");
 var vocales = "aeiouAEIOUÁÉÍÓÚáéíóú";
 
 var i = 0;
 
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
 			console.log("la posición de la primera vocal es " + i + ", y la letra es " + cadena1[i] + "!!!!");
 			j = vocales.length;
 			i = cadena1.length;
 		}
 		else{
 			j++;
 		};

 	};
 	i++;
 };


console.log("salió del loop");