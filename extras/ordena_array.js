function ordenaArray(arrDesordenado){

	for (i=0;i < arrDesordenado.length;i++){
		
		for(j=0; j < arrDesordenado.length; j++) {
			
			
		}

	}

	return arrOrdenado;
};

var arr1=[3,2,4,8,1];
console.log("El array desordenado es " + arr1);
console.log("El array ordenado es "+ ordenaArray(arr1);

/*

Para limpiar arrays: saca null, NaN, false, undefined y cero.


array1.filter(callbackfn[, thisArg])




function cleanArray( actual ){
  var newArray = new Array();
  for( var i = 0, j = actual.length; i < j; i++ ){
      if ( actual[ i ] ){
        newArray.push( actual[ i ] );
    }
  }
  return newArray;
}




Array.prototype.clean = function( deleteValue ) {
  for ( var i = 0, j = this.length ; i < j; i++ ) {
    if ( this[ i ] == deleteValue ) {
      this.splice( i, 1 );
      i--;
    }
  }
  return this;
};
 
*/

/*
 var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); toma desde el 1 hasta el 3 sin incluir el 3
Orange,Lemon
*/

/*
para ordenar arrays si son numéricos pongo parseFloat
nuevoKey.sort(function(a, b) { //para ordenar el array de objetos
    return parseFloat(b.value) - parseFloat(a.value);
});
*/