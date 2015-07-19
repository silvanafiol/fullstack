//dado un array, retorna los valores que son pares

function buscaPares(arr1){
var arrRes = [];
var i = 0;

	while (i<arr1.length) {
		if (arr1[i]%2==0) {
			arrRes.push(arr1[i]);
		}
		i++;
	};
return arrRes;
}

var miArr = [1,2,3,4];
console.log(buscaPares(miArr));
