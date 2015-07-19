javascript clase 6 funciones

en jscript las funciones si les paso mal los parametros no dan error pero después me da error al ejecutar porque espero valores que no son lo que retorna.
para evitar eso y no recibir undefineds por ej puedo antes de llamar a la función poner un if para consultar si los parámetros que voy a pasar son null o si if (!variable) que eso me devuelve el boolean de esa variable.

Cuando quiero que las funciones me devuelvan valores, uso la palabra reservada "return"

Cuando quiero definir una variable que sea array uso var a = [];

Nunca puedo hacer return de un statement, porque habíamos visto q el return de un statement siempre es undefined, entonces return 1 sería como return undefined.
Tampoco se puede hacer return de más de un objeto, solo puede retornar un valor cada función.

Para array no puedo usar typeof, porque typeof solo funciona para primitivos, y typeof de array me devuelve object, como con todos los objetos.... pero puedo usar la función isArray, para verificar que sea array y no tener error en runtime, eso se llama delimitar la función!!!

Ahora vamos a arreglar la fx buscar pares y agregarle la delimitación de la fx.

Javascript es un lenguaje con prototipado dinámico, entonces, dónde pongo el límite en la verificación de tipos de datos para no perder ese dinamismo.... no puedo poner typeof de todo, pero está bueno tomar como
criterio q lo que es propio de mi programación, lo interno, no lo controlo, y lo que viene de afuera, del usuario, lo controlo y lo protejo.

Una buena práctica es programar con earlyReturn, lo que hace que pueda separar en mis fx un área de validaciones de tipo o condiciones para parámetros y luego, bien clara y separada, otro área con el código propio de mi fx.
Es importante que sepamos que return; es lo mismo que return undefined; dentro de una fx.
Para cuando uso earlyReturn, después en el momento de usar la fx, de invocarla, también tengo que poner un if para revisar qué devolvió, si vino por el earlyReturn o por el caso feliz, eso en C por ej, se hace pasando distintos códigos de errores cuando sale por error y devolviendo el valor esperado cuando sale por el caso feliz.
Acá en javascript existen las exceptions, existe un statement que es para el manejo de exceptions y que es "throw". 

Importante, en lugar de usar return por cada caso no feliz uso throw!!!!
Entonces si uso throw, del lado de la fx, entonces, del lado del llamador de la fx, no necesito más un if que revise si volvió por caso feliz o no, en cambio de ese if, lo que uso es un "try catch".
En la invocación de la fx se usa así:
try{
	res = buscaPares_EarlyReturn(miArr);
	//acá ya puedo estar tranquilo que lo que tengo son valores válidos!!!!!
	console.log(res);
}
catch(e) {
	//acá se hacen rollbacks, cierre de conexiones a BD, etc.
	console.log("Tuve un error y lo manejé, el error fue: " + e.message);
};


La ejecución de fx siempre es un expression, que si la fx tiene return, devuelve valores y obtiene el valor.Si la fx no tener un return, entonces siempre devuelven por default undefined.


LO PEOR QUE PODEMOS HACER ES HACER UN TRY CATCH Y EN EL CATCH NO HACER NADA, PORQUE AHÍ ESTOY SILENCIANDO EL ERROR!!!!
ES PREFERIBLE NO HACER EL TRY CATCH Y DEJAR QUE EL ERROR FLUYA HASTA EL NIVEL SUPERIOR!!!!! OJO!!!!
NO SIEMPRE ES NECESARIO HACER EL TRY CATCH, POR AHI QUIERO APROPOSITO QUE EL ERROR SUBA!!!! PERO NUNCA HACER UN CATCH EN VACIO!!!!!

CUAL ES EL CRITERIO PARA SABER SI PONGO O NO UN TRY CATCH: SI YO EN ESTE MOMENTO LO PUEDO ATAJAR Y SE QUÉ HACER CON EL ERROR, LO CAPTURO, SINO, NO LO CAPTURO Y DEJO QUE SIGA, INCLUSO QUE SIGA ROMPIENDO MI PROGRAMA, ES MEJOR QUE QUE SIGA CON ALGO INVÁLIDO O QUE OCULTE EL ERROR.... ENTONCES SI PUEDO ATAJARLO LO HAGO, SI NO, LO DEJO SEGUIR Y NO PONGO EL TRY CATCH!!!!
--------------------------------------------------

SCOPE

PARAMETROS INFINITOS Y ANIDADOS

PASAJE X VALOR Y X REFERENCIA

CUANDO UNO PASA X VALOR UNA VARIABLE, A ESA VARIABLE NO SE LE PUEDE CAMBIAR ADENTRO EL VALOR.
POR EJ SI DECLARO UNA VARIABLE Y LE ASIGNO TRUE, HAGO UNA LLAMADA A UNA FUNCION A LA QUE LE PASO POR PARAMETRO LA VARIABLE Y LUEGO, A LA VUELTA DE LA LLAMADA A LA FX, MUESTRO ESA VARIABLE.. ENTONCES POR MAS QUE YO EN LA FX A LA VARIABLE QUE REPRESENTA ESE PARAMETRO LO CAMBIE, LO ESTOY CAMBIANDO ADENTRO DE LA FX, PERO NO SE VE REFLEJADO DEL LADO DE AFUERA.... ES DECIR, TODOS TODOS LAS VARIABLES EN JAVASCRIPT SE PASAN POR VALOR, NUNCA POR REFERENCIA!!!!

PERO SIN EMBARGO PUEDO CAMBIAR UN ARRAY!!!! POR QUE?
SI YO DECLARO UN ARRAY, LUEGO LO PASO POR PARAMETRO A UNA FX, COMO LOS ARRAYS SON MUTABLES, Y NO INMUTABLES COMO LO ES UNA VARIABLE STRING, A LOS ARRAYS SI LOS PUEDO CAMBIAR.
YO ESTOY CAMBIANDO EL CONTENIDO DEL VALOR QUE CONTIENE LA VARIABLE PERO NO ESTOY CAMBIANDO LA VARIABLE
SI LA VARIABLE QUE PASO ES MUTABLE, COMO LOS ARRAYS, VOS VAS A PODER CAMBIAR EL VALOR DE LA VARIABLE DENTRO DE LA FUNCION Y LO VA A REFLEJAR AFUERA.

PROBAR ESTO PARA VER COMO FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

-----------------------------------------------------------------------------

function test(param1,param2){
console.log(param1,param2);
}

test();
test(1);
test(1,2);
test(1,2,3);

esto es místico en JAVASCRIPT!!!!!!

Por eso hablamos tanto de hacer chequeos y controles de tipos de datos y parámetros, porque javascript no tira errores por pasar parámetros de más ni de menos.

cuando lo ivoco así, me da como resultados undefined undefined, 1 undefined, 1 2, 1 2 respectivamente

--------------------------------------------------------------

console.log(1)
devuelve 1
console.log(1,2)
devuelve 1 2
.
.
.
console.log(1,2,3,....)
devuelve 1 2 3     xxxx

hasta infinito... como funciona??

existeel parametro arguments:

arguments parece un array, funciona tipo array pero vemos que no es un array, porque por ej le funciona el posición [0],[1], etc, funciona el length, etc pero no funciona el pop , cuando le hago isArray me devuelve false, y el typeof es object

todos los objetos tienen la propiedad toString, hay algo que se puede hacer que es method borrowing que es pedirle prestada funcionalidad de un objeto y usarla para mi objeto.
"str".toString(); es un string particular de los objetos tipo string
pero en cambio arguments.toString(), está usando otro toString más global que el toSting de los tipos string básicos.

por eso el typeof arguments.toString() me devuelve string
pero el arguments.toString me devuelve object Arguments

y en cambio, Object.prototype.toString() me devuelve object

como hago para a un objeto tipo string aplicarle la funcionalidad toString de los tipo object y no de los tipos string???? CON CALL, call me permite cambiar lo que está a la izquierda del punto!!!!

Object.prototype.toString.call("str") da object string

o sea que esto es más poderoso que el typeof!!!!

pero acá lo importante es el uso del call, con el call estamos desacoplando el metodo toString de lo de izquierda (o sea object.prototype) y acoplándolo a lo de la derecha.

----------------------------
cuando invoco una función y no la ejecuto, lo que me devuelve es la función misma
por ej si pongo
[].pop
me devuelve 
function pop()

pero si pongo [].pop()
me devuelveundefined porque la ejecutó
-------------------------------------------------------
entonces si pongo var pop = [].pop;
esto es poderosísimo porque me estoy guardando en una variable, la expresión (porque devuelve un resultado), de la función pop, no me estoy guardando el resultado de la función, sino la función misma!!!!!

si hago typeof [].pop me devuelve "function"
--------------------------------------------------------
 

entonces si yo escribo pop() me da error porque dice que lo estoy llamando desde un null

pero si hago 
pop.call(["test"])
me devuelve "test"

var arr = ["test"];
undefined

pop.call(arr);
"test"

para buscar todos los metodos puedo hacer:
Array.prototype.pop
Array.prototype.xxxx

declaro:
arr
[]

arr.push ===Array.prototype.push
me devuelve true

Array.prototype.push.call(arr,"un nuevo dato");
1
devuelve 1 porque push devuelve la length del array

luego si muestro arr me devuelve 
arr
["un nuevo dato"]



acá no tiene mucho sentido porque arr ya es un array pero puedo aplicarlo a otro tipo de dato
---------------------------------------------------------------------------------------------


por ej 
function test(param1,param2){
console.log(Array.prototype.pop.call(arguments));
};
y esto anda porque unicamente se fija que al que se lo aplico se parezca a un array aunque no sea un array, solo necesita que tenga length y elementos 

entonces si hago
test(3,5);
devuelve 5

------------------------------

ahora si lo aplico a un string, no sirve da error de object is not extensible

---------------------------------------

cuando aplico el call tengo que conocer el metodo al que estoy invocando para saber si es aplicable o no, por ej push y pop como cambian al array no puedo aplicarlo a un string
pero slice, como trae un pedacito del array , si, lo puedo aplicar a un string

por ej

Array.prototype.slice.call("mi palabra",3)
me devuelve ["p","a","l","a"."b","r","a"]

-------------------------------------------
apply es un call, pero en lugar de recibir los parámetros separados por comas, los recibe en un array
y me permite hacer el programa variable!!!! o sea me permite hacer INDIRECCION de los parámetros y usarlos en un programa!!!!!

var params[];
params.push(3);
params.push(5);
Array.prototype.slice.apply("mi palabra",params);
me devuelve ["p","a"]

----------------------------------------------
var str = "texto";
String.prototype.substr.call(str,2);
"xto"

var str="texto";
String.prototype.substr.apply(str,[2]);!!!! porque apply espera solamente el parametro sobre el que se aplica y el segundo parametro es un array, y son solo dos parametros.
devuelve lo mismo que la de arriba con el call
pero apply me ofrece la manera de un nivel mas de indireccion y me permite programar!!!


String.prototype.substr.apply(str,[]);
"texto"


var str="texto";
String.prototype.substr.apply(str);
"texto"

------------------------------------------------------------------
console.log(3, 5, 9)
VM288:2 3 5 9
undefined
console.log.call(console, 3, 5, 9)
VM289:2 3 5 9
undefined
console.log.apply(console, 3, 5, 9)
VM290:2 Uncaught TypeError: Function.prototype.apply: Arguments list has wrong type
    at <anonymous>:2:13
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM290:2InjectedScript._evaluateOn @ VM187:895InjectedScript._evaluateAndWrap @ VM187:828InjectedScript.evaluate @ VM187:694
console.log.apply(console, [ 3, 5, 9 ])
VM291:2 3 5 9
undefined
---------------------------------------------------------------------


function sumar(){
	var res = 0;
	for (var i=0; i<arguments.length; i++){
	res += arguments[i];
	}
	return res;
};

sumar(1,3)
devuelve 4
sumar(1,3,5,10,20)
devuelve 39

var sumandos = [1,3,5,10,20];
sumar.apply(null,sumandos);
devuelve 39
sumar.apply(null,sumandos)
devuelve 39
---------------------------------------------------------------

SCOPE:
function f1(){
	console.log(v1);
	var v1;
}

f1();

no da error!!!!!!! solo devuelve undefined porque no tiene valor v1
porque hay algo que se llama hoisting que hace que la variable exista siempre que se defina en algun lugar de la fx, no importa si antes o despues, lo que toma es la declaración pero no la inicialización!!!! ojo con eso!!!!


function f1(){
	console.log("antes", v1);
	var v1=2;
	console.log("despues", v1);
}

f1();
var v2;


el hoisting tiene un ambito, solo sube dentro de f1()

por lo tanto si yo invoco f1();
y luego console.log(v1) da error porque ya no existe fuera de f1()

f1();
console.log(v1);

muestra 

antes undefined
despues 2
error v1 is not defined!!!

en cambio v2 es global!!! no da undefined

EN JAVASCRIPT LO UNICO QUE DEFINE LOS AMBITOS SON LAS FUNCIONES!!!  Y SIEMPRE VALE PARA ADENTRO Y NUNCA PARA AFUERA DE ESA FUNCION
-------------------------------------------------------

EJEMPLO:

[3,5,9].forEach(function(curEl,curIndex,arr){
	console.log(curEl,curIndex,arr);
});
devuelve
3 0 [3,5,9]
5 1 [3,5,9]
9 2 [3,5,9]

lo que es lo mismo que hacer:
var myArray = [3,5,9];
function hacerAlgo(curEl,curIndex,arr){
	console.log(curEl,curIndex,arr);
}
for(var i=0;i<myArray.length;i++){
	hacerAlgo(myArray[i],i,myArray)	;
}

-------------------------------------------------------------

EJERCICIO:
REALIZAR UNA FUNCION QUE RECIBA UN ARRAY Y UNA FX DE FILTRADO Y QUE MEDIANTE EL USO EXPLICITO DE FOReACH
CONTABILICE LOS ELEMENTOS DEL ARRAY PASADO, QUE AL APLICARLE LA FX RECIBIDA POR PARAMETRO AL ELEMENTO ACTUAL DEL FOReACH ESTA DEVUELVA TRUE

