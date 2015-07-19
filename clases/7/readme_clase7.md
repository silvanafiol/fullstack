var obj = {}
undefined
var obj = { inc: function (){ console.log('hola')}}
undefined
prompt()
"inc"
obj[prompt()]()
VM390:2 hola
undefined

-----------------------------------------------------------------------------------------



OBJETOS:

PERO ANTES AVISOS IMPORTANTES:
si declaramos mal una variable y me olvido el var al declarar y solo hago la asignación, OJO 
porque no da error, y la estoy convirtiendo en VARIABLE GLOBAL. a partir de ahí, en cto invoque a ese pedazo de código, si llego a usar otra variable con ese nombre estoy con este valor, ya q la variable es global

myVar = "pepe"; hace que la variable sea global

var myVar = "pepe"; esto sería lo correcto

---------------------------------------------------------------------------------------------------

si dentro de un if o de un for yo declaro una variable con var mundo = 0;
aunque no entre en el bloque ese, if o for, igual la variable ya queda declarada para todo el ámbito de la fx
no hay manera de definir una variable dentro de una fx y que no la vea TODA la fx... entonces si la uso fuera del bloque, igual la variable va a tener valor y mi intención claramente no era que tuviera valor
--------------------------------------------------------------------------------------------------------
otra cosa: si hago uso de una variable pero la declaro más abajo y tambien la asigno mas abajo... no da error, porque en javascript, las declaraciones de variables suben, pero no las asignaciones, o sea que no da error pero no se va a ver el valor y va a dar undefined porque la asignacion está mas abajo que la línea donde se usa la variable
-----------------------------------------------------------------------------------------------------------
en cambio, si esto mismo pasa en una fx, la invoco antes de declararla, no da error y ademas se toma el valor que retorna la fx porque no hay forma de separar en una fx la declaración y la asignación, entonces si se invoca antes es mala práctica pero es como si se invocara después.
--------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
OBJETOS: ES TODO LO QUE NO ES ALGO PRIMITIVO!!!

asi lo definimos
var obj = {a:1};
para acceder a esa key se hace: obj["a"] y nos devuelve 1

hay otra notación para cuando las keys son alfanuméricas y es obj.a que también nos devuelve 1

en arr.length el length es una key de mi array

basicamente en las keys puedo poner un nro, un string o un objeto, por ej var obj = {a:{}};
estoy definiendo un objeto que tiene una referencia a otro objeto

o tambien obj = {a:fx()};
y puedo hacer function obj.a() porque a ahora es un método de obj

las keys siempre van a ser strings, porque sino nos da error o nos hace una conversion a string de esa key

ejemplo:
obj[{}]=5;
si despues quiero mirar el objeto obj me muestra que tiene las keys b:3 y la kegy object Object:5

a los objetos, como cualquier otro tipo de objeto, lo puedo tratar de convertir, por ej a string
si yo hago String({}); me devuelve un tipo "[object Object]"

si yo hago obj = {1:4} lo que hace es crear una key 1 que vale 4, lo convierte a string para usarlo como key, ahora si yo lo invoco después como obj[1] me devuelve 4 pero si yo lo invoco como obj.1 me tira error porque el 1 no es string y las keys son string

para utilizar objetos necesito saber sus keys y para eso se usa Object.keys(obj)
y me devuelve un array de strings donde cada string es una de sus keys

SI PONGO var obj = {cuenta : 1} es lo mismo que var obj = {"cuenta" : 1}
siempre las keys son strings!!!! y ninguna de las dos da error

que pasa si yo quiero acceder de forma dinámica:
var myKey = 'cuenta';
mi notación va a ser si o si obj[] porque ahi lo que le ponga dentro de los corchetes se transforma en string 
entonces obj[myKey]

ENTONCES: LA NOTACIÓN DEL PUNTO SIRVE SI QUIERO ACCEDER A ALGO ESTÁTICO Y LA NOTACIÓN DEL CORCHETE SIRVE SI QUIERO ACCEDER A ALGO DINÁMICO!!!!!!!!!!!!!!!!!

-------------------------------------------

DOM:
el atributo onclick puedo definir codigo javascript

--------------------------------------------
GQUERY es una libreria, que es un pedazo de codigo javascript que hace algo... gquery tiene como 8000 lineas, pero sigue siendo una libreria
la versión es 1.11
con el shortcut $ es un reemplazo sintactico pero la variable global en realidad es jQuery

var jQuery = 8;
var $ = 8;

es lo mismo

hay librerias que agregan cosas por ej una que le agregue metodos a vectores, eso no esta bien visto porque empezas a tener cosas que no tiene todo el mundo por ej [].lalalala sería una libreria que no me conviene

en cambio una que agregue funcionalidades es buena

utiliza selectores

$('#lst-ib') me permite aplicarle código jscript a los objetos que cumplan con ese selector

otra manera es 
document.querySelector('#idMio')
el selector es algo que me va a traer elementos, lo mismo que en css, es para saber a quién le voy a aplicar el código, es una referencia que me permite seleccionar elementos html

me devuelve un objeto particular de jquery que represnta una lista particular de elementos del dom, es importante lo de lista, porque los selectores devuelven en gral mas de un elemento, salvo qcomo enste caso que como es un id por ahi devuleve solo un elemento

el typeof de $('#lst-ib') es object, pero si pregunto Array.isArray($('#lst-ib')) me devuelve false

si hago $('#lst-ib')[0] estoy accediendo al primer elemento de una lista de elementos del DOM

si hago Object.prototype.toString.call($('#lst-ib')[0]) que es otra forma de hacer un typeof, me devuelve object HTMLInputElement


$('#lst-ib')[0].value = ""

$('#lst-ib')[0].value me devuelve string vacío

cuando accedo al [0] ya estoy en el dom, yo puedo leer una especificacion de los elementos tipo htmlimputelement para ver que propiedades tienen... por ej value y con eso me doy idea de como utilizarlos

si pongo $('#lst-ib')[0] = "esta es mi nueva busqueda";

veo que en la ventana de google la me aparece eso en la ventana de busqueda de google

-------------------------------------------------------------------------------------------

$('#lst-ib').val() me devuelve "esta es mi nuva busqueda"
-------------------------------------------------------------------------------------

hay una forma semantica de acceder a atributos que es $('#lst-ib').attr('id') y me devuelve su id
o por ej $('#lst-ib').attr('class') y me devuelve su clase
también puedo asignarle y cambiarle la clase, con $('#lst-ib').attr('class','minuevaclase')
y con eso ya la cambie

con $('#lst-ib').addClass agrego una clase nueva
---------------------------------------------------------------------------------------

como obtengo una lista de los atributos de los elementos, como los elementos son objetos, lo obtengo con las keys!!!!

$('#lst-ib').addClass===$('#lst-ib')[addClass]

Object.keys($('#lst-ib')) me devuelve sus clases

[].map  me devuelve todas las propiedades********
--------------------------------------------------------------

$('#lst-ib').keydown es una funcion
$('#lst-ib').keydown(function(){})
esto es **********



$(#lst-ib).keydown(function(){console.log('apretaste')}) entonces cada vez que escribo algo en la cajita de busqueda , en la consola me aparece "apretaste"

esto nos recontra sirve para "escuchar" cuando apretamos las teclas y programar algo en esos eventos, asi se hacen los jueguitos

---------------------------------------------------------------------------------------

document:
#document representa el objeto global por el cual voy a acceder al "todo", a su vez document tambien tiene metodos propios y otros metodos de su padre que se pueden obtener con 
Object.keys(object.getPrototypeOf(document))

#(document).ready se va a ejecutar cuando todo en la pantalla ya esten listo, bajado las imagenes, llenado las variables, todo todo

jueguito:
para ejecutar cosas en el futuro se usa setInterval y setTimeOut, a ambas hay que pasarles en el parametro una función que sea lo que se ejecuta, y un intervalo de tiempo en miles, por ej 60000, tiene que ser algo que el ojo no lo registre pero de tiempo para no entrar en loop a la compu

otro tema es ver si me fui de los bordes, para hacerlo perder o sino hacerlo volver a aparecer del otro lado
si player.x es menor a cero o player.x mayor a 45  o si player.y es menor a 1 o player.y mayor a 45 pierde........

programacion orientada a eventos es esto!!!!
todo esto está en github/coderhouse/pseudosnake
-------------------------------------------------------------------------------------------------------------------



var pais = "kawabonga"
undefined
var obj = {}
undefined
obj[pais] = 1;
1
obj
Object {kawabonga: 1}
obj.Argentina
undefined
pais
"kawabonga"
pais = "Argentina"
"Argentina"
obj.pais
undefined
obj[pais]
undefined
obj[pais] = 1
1
obj.pais
undefined
obj.pais = "estático"
"estático"
obj
Object {kawabonga: 1, Argentina: 1, pais: "estático"}
obj["pais"]
"estático"
obj[pais]
1
obj["sdfsdfsd"] = 3
3
obj
Object {kawabonga: 1, Argentina: 1, pais: "estático", sdfsdfsd: 3}
obj[pais] =1
1
obj[pais]++
1
pais
"Argentina"
obj
Object {kawabonga: 1, Argentina: 2, pais: "estático", sdfsdfsd: 3}
obj[pais]++
2
obj
Object {kawabonga: 1, Argentina: 3, pais: "estático", sdfsdfsd: 3}
