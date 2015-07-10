javascript clase4

para este tp, hacerlo con bootstrap o con flexbox.... aprender bookstrap, hay que ponerse en tema con los frameworks css!!!!!
bookstrap es un conjunto de clases css para que todo quede lindo... leer y con consultas específicas hacérselas a mauro por el mail de fullstack, y así tener más rápido el feedback para hacer el tp!!!!
Acá no vemos sass ni less que son lenguajes sobre css, que permiten hacer css en forma más fácil y más rápida... si queremos nos podemos meter con eso también!!!

Lenguajo de alto nivel
tipado estatico lje de programacion la variable que tipo es
variable es una referencia a un valor uso para hacer operaciones llamand a rutinas
dos tipos estaticos que le tengo que decir y el dinamico al que le decis el tipo de variable

tipado dinamica 
herencia prototipada
funciones de orden superior una funcion puede recibir como parametro otra funcion node callback llamar una funcion a otra

se peleaban netscape e internet explorer y cada desarrollador hacia su lenguaje y no eran compatibles... dejaron de pelearse y todos cooperaron, cuando apareció google, etc... todos ofrecen soporte y la pelea empezó entre opera, chrome y todos en cual ofrecía mejores soportes y desarrollos.

html5, css3 y node.js determinan una nueva Era, son del 2001, 2008 y 2009 respectivamente.

Todos esto más la nueva implementación de javascript permiten hacer un montón de cosas... no es asincrónico pero me permite hacer un uso asincrónico. El asincronismo es muy importante para ser responsive!!
Si voy al chrome, inspeccionar elemento, consola y pongo alert('esto es bloqueante'); + enter, y no le doy ok al mje, quedo bloqueado no solo en esa sesión sino en todas las solapas.

La mayoría de los lenguajes de programación se puede pasar a javascript, y programando en javascript, se viene hacer 3D!!!!!!
Arman una máquina virtual para correr el juego y esa máquina virtual, se programa para poder correr en todos los ambientes... luego el juego es portable y corre en todos los navegadores de todas las plataformas!!!!

Firefox hizo un soperativo que corre html entonces todas las aplicaciones nativas para firefox son en html, por ej, sublime, se puede interpretar en html directamente... a eso estamos yendo...

luego, depende en que plataforma estemos corriendo ese javascript, esa plataforma le agrega funcionalidades a javascript, es distinto lo que le agrega node, de lo que le agrega el navegador, etc...

control shift p y todo el package y ahí buscamos install package ... y ahí elegimos markdown edit y lo instalamos, pero no me anduvo, me dio un error!!!!!

A diferencia de css que teníamos dos etiquetas, una para incluirlo dentro de la página y otra como archivo, acá en jscript tenemos una sola etiqueta para incluir jscript.

LO QUE ESTÁ BIEN ES PONER EL JSCRIPT AL FINAL DEL BODY, PORQUE DE ESA FORMA NO DEMORAMOS LA CARGA DE TODO EL HTML Y CSS CON MI JSCRPT
iGUAL PARA PROBAR JSCRIPT NOS CONVIENE HACERLO DESDE EL BROWSER EN INSPECCIONAR ELEMENTO, CONSOLE!!!

EN JS EXISTE EL ATRIBUTO ASINC Y TE SIRVE PARA CUANDO CARGO DINAMICAMENTE DESDE JS OTRO ARCHIVO JS, EN OTROS CASOS NO TIENE SENTIDO
JS PUEDE USAR TAGS

*************************************
PARA SABER DE QUÉ TIPO DE DATO ES ALGO, UTILIZO "TYPEOF"
LOS STRINGS PUEDEN ESTAR CONTENIDOS ENTRE COMILLAS SIMPLES O COMILLAS DOBLES, PERO SEAMOS CONSISTENTES Y USEMOS EL MISMO TIPO DE COMILLAS!! EL USO DE DOS TIPOS DE COMILLAS SIRVE PARA EVITAR ESTE TIPO DE ERRORES: "LA PALABRA"HOLA" SE USA PARA SALUDAR";

PARA SOLUCIONAR ESTO PUEDO USAR 
1)"LA PALABRA \"HOLA\" SE USA PARA SALUDAR"; 
2)'LA PALABRA"HOLA" SE USA PARA SALUDAR';

CUANDO JSCRIPT NO SABE QUE DEVOLVER, DEVUELVE UN UNDEFINED
UN STATEMENT NO DEVUELVE NINGUN RESULTADO Y POR ESO JSCRIPT ENTIENDE QUE DEVOLVIÓ UN UNDEFINED... PARA 

UN STRING ES UN EXPRESSION QUE DEVUELVE UN STRING, ESTÁ PENSADO ASÍ EN CAMBIO UN ALERT, QUE ES UNA FUNCIÓN, NO DEVUELVE NADA, PORQUE ALERT LO PODEMOS PENSAR COMO QUE ES UN STATEMENT, EN CAMBIO UN STRING ES UN EXPRESSION Y LOS EXPRESSION DEVUELVEN TIPO DE DATO DEL PROPIO EXPRESSION

ESO LO VEMOS EN LA CONSOLA CON EL SIMBOLITO DE LA IZQUIERDA... > Y <.

EXPRESSION ES UN CASO PARTICULAR DE STATEMENT, POR LO TANTO SI JS ESPERA UN STATEMENT LE PUEDO PASAR UNA EXPRESSION PERO SI ESPERA UNA EXPRESSION NO PUEDO PASARLE UN STATEMENT

una asignación es una expresión, una declaración es un statement!!!!!

***********************************************

EL OPERADOR TYPEOF, ME DEVUELVE EL TIPO DE DATO QUE ES LO QUE LE MANDO... Y ME DEVUELVE UN TIPO DE DATO STRING EN EL CUAL ME DICE QUÉ TIPO DE DATO ES EL PARAMETRO QUE LE PASE
TYPEOF ES UN OPERADOR EMBEBIDO Y PROPIO DE JSCRIPT, NO ES UNA FX PORQUE NO SE USA CON PARÉNTESIS, EN CAMBIO ALERT NO, ALERT ES UNA FX QUE ES PROPIA DEL BROWSER
****************************************************

todos los números en jscript son de punto flotante, es decir, son todos decimales

typeof "33";
"string"
typeof 33
"number"
************************************************************
true
true
false
false
typeof true
"boolean"
*************************************************************
null representa la ausencia de OBJECT, es la ausencia de un valor, y ese tipo de dato es NULL, no es como boolean que tiene valores true y false, pero el tipo de dato NULL solo tiene el valor null
en la consola:
null
null

typeof null
"object"
*******************************************************************
undefined es similar a null porque tiene un único valor posible que es undefined
en la consola:
undefined
undefined

typeof undefined
"undefined"
****************************************************************
TODO OTRO TIPO DE DATO QUE NO SES BOOLEAN, STRING, NUMBER, NULL O UNDEFINED; ES OBJECT, ES TIPO DE DATO OBJECT
*******************************************************************

VARIABLES son expressions
EN JSCRIPT LAS VARIABLES SE DEFINEN CUANDO LE ASIGNAMOS DATOS, POR LO TANTO PODRÍAMOS CAMBIARLES EL TIPO DE DATO AL ASIGNARLES VALOR... PERO ESO NO ESTÁ BIEN PORQUE COMO LAS CLASES DE CSS, LA IDEA ES DEFINIRLAS PARA IDENTIFICAR A LO QUE SE REFIEREN, ENTONCES TRATAR DE NO CAMBIAR EL TIPO DE DATO DE UNA VARIABLE POR MAS QUE JSCRIPT TE LO PERMITE
LAS VARIABLES NO PUEDEN COMENZAR SUS NOMBRES CON UN NÚMERO, DEBEN COMENZAR CON UNA LETRA, Y PUEDEN TENER NROS O GUIONES BAJOS EN SUS NOMBRES, NINGÚN OTRO CARACTER.
en la consola:
var a2
undefined
typeof a2
"undefined"
puedo declarar variables de dos formas, ambos son statements:
1) var a2;
2) var a2= "pepe";

Esto es un statement:
var myVar
Esto es un expression:
myVar

ojo con eso!!!!!

LA UNICA FORMA DE DECLARAR UNA VARIABLE ES ANTEPONIENDO LA PALABRA VAR
AHORA, CUANDO LA USO, YA PONGO EL NOMBRE DE LA VARIABLE DIRECTAMENTE, Y LA VARIABLE EN SÍ MISMA ES UNA EXPRESSION, SI PONGO  LA VARIABLE COMO TODA EXPRESSION, DEVUELVE EL VALOR QUE TIENE, EL STRING  DEVOLVIA EL MISMO STRING Y LA VARIABLE DEVUELVE SU VALOR

TODA VARIABLE CUANDO LA DECLARO Y NO LE ASIGNO VALOR TIENE "UNDEFINED"
CON LO CUAL ES EXACTAMENTE LO MISMO DECLARAR var a2; o declarar var a2= undefined;
var myVar;
undefined
myVar;
undefined


también puedo declarar muchas variables juntas: var nombreUsuario, myVar;
da lo mismo que var nombreUsuario; var myVar;

también puedo declarar var nombreUsuario= "pepe", myVar;
PARA SEPARAR STATEMENTS USO ; PARA SEPARAR EXPRESSION USO ,
true, 3
3
true, 3, 4
4

********************************
typeof espera un expression
si yo escribo: typeof var myVar, da error
si yo escribo: typeof myVar devuelve el tipo de myVar, da undefined, no es error.
si yo escribo: typeof undefined devuelve el tipo de undefined que es undefined.

si yo escribo typeof myVar,3; devuelve  3

porque lo que js entiende es dos expressions... primero typeof myVar, que le da undefined y después el expression 3, que le da 3 y muestra el propio 3

typeof myVar, 3; 
es lo mismo que poner 
undefined,3

otra cosa es poner typeof(myVar,3), que evalúa el valor del paréntesis completo....y devuelve number
en typeof(myVar,3) hay cuatro expressions;
1)myVar : que da undefined
2)3: que da 3
3)(myVar,3): es la expression del paréntesis que da el valor de una expresion coma otra expresion que siempre es el valor de la última o sea 3
4)typeof(myVar,3): que evalúa el typeof del paréntesis y que da number

***************************************************************************************** 

LOS PARAMETROS DE LAS FX SON EXPRESSIONS

******************************************************************************************
Por cada tipo de dato, salvo para null y undefined, hay una fx que sirve para castear y que garantiza que lo que devuelva esa fx es el tipo de dato que representa.
por ej :

typeof 1;
"number"
typeof "1";
"string"
String(1);
"1"


CASOS RAROS A TENER EN CUENTA:
String(true)
"true"
String(null)
"null"
String(undefined)
"undefined"
Number(true)
1
Number(false)
0
Number(undefined)
NaN   (Significa not a number)
Number(null)
0


typeof (Number(null))
"number"
typeof (Number(NaN))
"number"

PORQUE TODO LO QUE DEVUELVE LA FX NUMBER ES TIPO NUMBER, ES UN POCO LOCO QUE NUMBER DE UNDEFINED DA NAN PERO TYPEOF NAN ES NUMBER...

**************************************************************************************

OPERADORES:
+ - * / tipeof.... son todos operadores

****************************************************************************************
3+4
7
dos numbers


false + true
1
3 + true
4
porque convierte al tipo de dato que tenga más jerarquía y convierte el boolean a number


false + "1"
"false1"
3 + "1"
"31"
porque string tiene mayor prioridad que number y que boolean

NaN+0
NaN
NaN+undefined
NaN
porque el NaN es elemento absorbente para la suma.... ahora ojo!!!

NaN+"pepe"
"NaNpepe"
porque typeof NaN es number, y el string tiene precedencia sobre number, por eso NaN+"pepe" es un string

*****************************************************************************

pero en el caso de un operando + solo, al ppio de una sentencia, no sumando dos términos, ahí convierte simpre a número, aunque tenga un string lo conviete a número:
+"pepe"
NaN
+"1"
1
+undefined
NaN

+myVar (Esto lo vamos a ver mucho, es un mal uso pero se usa mucho!!!!)

OJO, HAY QUE TENER MUCHISIMO CUIDADO DE NO CAER EN NaN, PORQUE ES ABSORBENTE EN LOS NROS Y UNA VEZ QUE CAES EN NaN, NO HAY FORMA DE VOLVER DE NaN!!!!

ENTONCES, EN SÍNTESIS, ANTEPONER EL SIGNO + A ALGO ES COMO ESTAR ESCRIBIENDO LA FX NUMBER A ESE ALGO, PERO ES MUY "SUCIO", PERO EL EFECTO ES EL MISMO
*************************************************************************************************************

ALGO PARECIDO ES USAR 1+"" CONVIERTE TODO A STRING Y ES LO MISMO QUE USAR LA FX STRING PERO ES MAS "SUCIO", NO SE DEBERIA USAR PERO LO USAN!!!!

***********************************************************************************

break
break
break

*********************************************************************************

hay datos inmutables y otros que no son inmutables
los tipos primitivos son inmutables, los tipos compuestos no...

var myStr = "uno"
myStr = "dos"

el string de la manera más simple es "", después otro más complejo sería "a", y otro "ab"

myStr[0] será "a"
pero myStr[2] me va a dar undefined

un string es inmutable:
var my= "123"
undefined
my[1]= "4";
"4"
my
"123"
my[1]
"2"
con esta prueba veo que si bien no me tira error, no me está cambiando realmente el valor del string, el string nunca cambió!!!

LOS VALORES PRIMITIVOS NO SE PUEDEN CAMBIAR!!!!

****************************************************************************************
"hola"+"mlundo"
"holamlundo"
"hola"-"mundo"
NaN
"hola"*"mundo"
NaN
"hola"/"mlundo"
NaN
********************************************************************************************
ACORDARME DE ESTO:
Boolean(0)
false
Boolean("")
false
Boolean(undefined)
false
Boolean(null)
false
Boolean(NaN)
false
Boolean(false)
false

**********************************************************************************
!true
false
!false
true
!NaN
true
!undefined
true
porque:
Boolean(undefined)
false
!Boolean(undefined)
true
*********************************************************************************
OPERADORES POSICIONALES:
falsy es cualquier expresión que evalúa a false y truty es cualquier expresión que evalúa a true, por eso estos casos de lógica proposicional devuelven el valor de la expresión en donde corta la evaluación, porque con evaluar la primera parte ya resolvió la expresión:
0&&1
0
1&&true
true
true&&1
1
false&&0
false
false&&1
false
(true &&1) &&2
2

pero:
1||2
1
0||2
2
false||true
true
0||false
false
false||0
0

******************************************************************
OJO!!!
tenemos 3 usos de "igual", el primer = asigna, el == compara y convierte tipos, el === hace un igual estricto...
el que tenemos que usar es el === porque tenemos que limitar el comportamiento default del js para evitar errores
true == 1
true
true ===1
false
********************************************************
y con el distinto también tenemos el desigual y el desigual estricto:
1!=2
true
1!==2
true
true !=1
false
tue != 1
true!==1
true
*********************************************************************************
*********************************************************************************
*********************************************************************************
EJERCICIOS:
TODOS LOS IMPUT QUE TENEMOS EN JS VAN A SER STRING, POR LO TANTO DEBEMOS CONVERTIRLO AL DATO QUE QUEREMOS.

**********************************************************************************************

var numero = Number(prompt("ingresa")); devuelve undefined, pero a la variable igual le asigna el valor.... ok
pero
var numero;
numero = Number(prompt("ingresa"));
devuelve un nro... porque lo que está en el segundo caso es un statement y luego una expresión, mientras que en el primer caso es un statement

*****************************************************************


IF!!!!!
IF ES UN STATEMENT!!!!!!
las llaves son casos particulares de statements!!!!

DONDE ESPERA UN STATEMENT PUEDO PONER UN EXPRESSION PERO NO ALREVES, POR ESO NO FUNCIONA EL tipeof(var)

entonces 
if(expr) stmt1;[else stmt2;]

LOS BLOQUES SON UN CASO DE STATEMENT QUE NO TERMINAN CON PUNTO Y COMA!!!!!!!!!!!!!!!!!!

if (typeof variableDeDudosaExistencia) {alert ("no existe");};
undefined

PERO SI EN CAMBIO PONGO 

if (variableDeDudosaExistencia) {alert ("no existe");};

CANCELA PORQUE NO ESTÁ DEFINIDA, POR ESO LA IMPORTANCIA DE USAR TYPEOF CUANDO NO SE SI EXISTE O DE QUE TIPO ES...

EN CAMBIO SI ANTES LA DECLARO NO NECESITO USAR EL TYPEOF

CASO EN LA CONSOLA:
if (typeof variableDeDudosaExistencia) {alert ("no existe");};
undefined

OK


if (variableDeDudosaExistencia) {alert ("no existe");};
VM4607:2 Uncaught ReferenceError: variableDeDudosaExistencia is not defined
    at <anonymous>:2:5
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)(anonymous function) @ VM4607:2InjectedScript._evaluateOn @ VM276:895InjectedScript._evaluateAndWrap @ VM276:828InjectedScript.evaluate @ VM276:694


MAL


var variableDeDudosaExistencia
undefined
if (variableDeDudosaExistencia) {alert ("no existe");};
undefined

**********************************************************************************************
*********************************************************************************************
OPERADOR TERNARIO:
var numero = Number(prompt("ingresa")); 
var parImparMensaje = numero%2===0?"Par":"Impar";
alert("el numero "+ numero+" es "+parImparMensaje);
********************************************************************************************
*******************************************************************************************

BUCLES:
primero hay que encontrar una expresión que es la que se repite, y es la que puedo aplicar al bucle
esa expresión es i+=2; o i/=3; etc etc
o si son strings puedo poner 
texto +=" mundo!";

existe una expresión más acotada que es postincremento y preincremento: i++ o i--
si yo quisiera no solo incrementar sino también devolver ese incremento uso ++i o --i

****************************************************************************************************
*****************************************************************************************************

CONTEXTO:
Todos los objetos que tengo definidos, todas las variables todo, tiene un contexto.
Si no tiene nada que lo precede, ese contexto es WINDOW

Por ejemplo, ALERT pertenece a WINDOW

ALERT corresponde a WINDOW..... de la misma manera, LOG correstponde a CONSOLA.

LOG es una función, como lo es ALERT



