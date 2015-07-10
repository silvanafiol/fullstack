

//ejercicio 4: HACER QUE DADA UNA CADENA DE CARACTERES CUENTE TODOS LOS CARACTERES QUE SON TIPO
//NUMÉRICOS MAYORES A UN NÚMERO INGRESADO MEDIANTE PROMPT

 var cadena1 = prompt("ingrese la cadena que tiene algún número");
 var numeroIngresado = prompt("ingrese el número a comparar");
 var cantMayores =0;
 var i = 0;
 
  while ( i < cadena1.length) {

 		if (Number(cadena1[i]) > Number(numeroIngresado)) {
 			cantMayores++;
 		};
 	i++;
 };

if (numeroIngresado > 0) {
	console.log("la cantidad de números mayores a " + numeroIngresado + " es " + cantMayores);
}
else {
	console.log("no hay números mayores a " + numeroIngresado + " en la cadena ingresada.")
 };

