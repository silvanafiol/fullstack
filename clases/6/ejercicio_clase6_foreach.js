/*
EJERCICIO:
REALIZAR UNA FUNCION QUE RECIBA UN ARRAY Y UNA FX DE FILTRADO Y QUE MEDIANTE EL USO EXPLICITO DE FOReACH
CONTABILICE LOS ELEMENTOS DEL ARRAY PASADO, QUE AL APLICARLE LA FX RECIBIDA POR PARAMETRO AL 
ELEMENTO ACTUAL DEL FOReACH ESTA DEVUELVA TRUE

*/

myArr = [1,2,3,4,5,6];

function fxFiltrado(v1){
	if ( v1%2==0 ){
		return true;
	}
}

function externa(arr1,fxFiltrado){
	var i=0;
	arr1.forEach(function (curEl,curIndex,arr1){
		if (fxFiltrado(curEl)){
			i++;
		}
	});
	return i;
}

console.log("la cantidad de pares en true es: ", externa(myArr,fxFiltrado));
