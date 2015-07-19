/*
Realizar una función que reciba una función operación e infinitos operandos, y que devuelva un
array con los resultados de haber aplicado la operación en todos los argumentos, operando
siempre con el argumento actual y el siguiente. Esta función también tiene que validar los
parámetros y lanzar un error en caso que estos no cumplan con las condiciones pedidas.
*/

function fxOperacion(v1,v2){
	//console.log("entra en fx operacion")	;
	return (v1*v2);
} 

function recibeOperacion(){
  var arrSalida = [];
  var valorAnterior , elementoArraySalida = 0;
  var argLength = arguments.length;
  try{
		if ( typeof( arguments[0]) !== 'function' ) {
			throw arguments[0] + ' No es una función válida.' ;
		}
		if ( argLength%2 == 0 ) {
			throw  'La cantidad de argumentos no es correcta. Formato: FxOperación, pares de operandos separados por comas.' ;
		}
		if ( argLength < 3 ) {
			throw  'Al menos debe ingresar el nombre de la FxOperación y un par de operandos.' ;
		}

		//comienzo en 1 porque el primer parametro es la función misma!!!!!
		for (i=1; i < argLength; i++ ) {
			if ( typeof( arguments[i]) !== 'number' ) {
				throw  'Todos los operandos deben ser numéricos.' ;
			}
			if (i%2 !== 0){
				valorAnterior = arguments[i];
				elementoArraySalida = 0;
				//console.log("la posicion es impar, guarda el elemento "+ valorAnterior);
			}
			else{
				elementoArraySalida = arguments[0](arguments[i],valorAnterior);
				//console.log("llamó a la fx operacion, con "+ valorAnterior + "y"+ arguments[i]);
			}
			if (elementoArraySalida != 0){
				arrSalida.push(elementoArraySalida); 
			}
		}
		return arrSalida;
    }
  catch(err){
		console.log( 'Error: ' + err );
		return [];
    }
 
}


try{
	var arrResultado = recibeOperacion(fxOperacion,2,5,3,3,2,4);
	if ( arrResultado === [] ){
		throw  'Error en la invocación, devolvió un array vacío.' ;
	}
	console.log("El array obtenido de la multiplicación es: ", arrResultado );
   }
catch(e){
		console.log( 'Error Ppal: ' + e );
   }
