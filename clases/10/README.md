bajarme graficar del slack de coderhouse de oviedo
primero instaló en node todos los modulos que estaban en el jscript

corre npm install express generator -g

despues corre express express-example --hbs con esto te crea la carpeta express-example y te crea todas las dependencias 

hbs es un template  que me formatea y me instala todas las dependencias para usar ese template y no el default

despues en la carpeta que creamos, ponemos npm install para poner todos los modulos y luego le damos npm start y eso pone a correr express en el localhost:3000

express tiene tres partes middlewares, rutas, template engine... template engine es algo que le pasas valores y un template y te escupe lo que vos necesitas... hbs es un template engine

lo mas importante es middlewares!!!!!

express hace de su solicitud http una especie de cadena de comportamientos,inicio a -> b-> c-> d-> end
es importante entender que aca hay un cliente y un servidor, siempre vamos a estar del lado del servidor y vamos a recibir solicitudes y responderlas

entonces para una solicitud en particular vamos a poder definir un flujo de etapas que serían inicio, pasar por la etapa a, la puede completar o no, a puede elegir o no terminar el flujo y si decide seguir, sigue con b que puede hacer lo mismo que a, y así hasta el end.... end representa cuando vos matas el middleware, de a hasta d son todos middlewares

esto tiene sentido si yo quiero ver a mi servidor como algo mas modular
por ej si yo digo que a o b o c o d(404) va a ser mi template engine, le estoy diciendo a express "usa el template engine para servir contenido estatico", por ej si te viene contenido para esta url servilo desde esta carpeta

el servicio graficar solamente utiliza rutas... es un caso particular de middleware... un middleware hay que entenderlo como ETAPAS, cualquier aplicacion express es solo un conjunto de middlewares.
algo importante es que nosotros definimos el orden, podriamos poner b antes que a, por ejemplo

middleware va a ser una fx pero es un modulo que hace una determinada cosa

no conviene agarrar todos los middlewares y ponerlos todos dentro de una sola funcion, pero eso no esta bueno

mi aplicacion es un conj particular de middlewares en un orden específico que yo le doy.

como agrego un middleware? con el metodo user por ej:
app.use(logger('dev'));
aca el logger en un contexto de responder y recibir solicitudes, no agrega funcionalidad, mas que decir qué solicitudes recibiste, el verbo, el pass, etc

app.use(bodyParser.json());
dijimos que la aplicacion express viene pelada, sin este bodyParser express no va a poder acceder a la propiedad que representa el contenido de la solicitud

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
esto es para servir contenido estatico en express, recibe una ruta como parametro

express me da abstracciones que resultan ser utiles, como esto del body, que para leer el body en node pelado tengo un montón de codigo, entonces con express, yo puedo interpretar lo que el cliente manda, que es lo mismo que leer el body, lo hago con una sola sentencia del bodyParser

ahora si quiero hacer una aplicacion voy a tener que seguir agregando codigo

las ultimas dos son rutas es decir son middlewars que los estoy agregando a una ruta específica, es decir que son fx que se van a ejecutar unicamente cuando una solicitud cumpla con esas rutas especificas:
app.use('/', routes);
app.use('/users', users);


en esta aplicacion la ruta que estamos utilizando es /data

rutas es algo mas particular, es decir dentro de un bug de esa ruta voy a querer finalizar por lo general, dado un path de una solicitud ejecuto un fx y finalizo la solicitud

el autor del proyecto puso un package que dice que el proyecto se inicia con start

npm es un alias, es una facilidad, si no existiera npm igual podria ejecutar la aplicacion, es una sentencia de la linea de comandos y ejecuta el comando start de la biblioteca de comandos

dentro de la carpeta rutas vamos a tener dos archivos, index.js, que si leimos el contenido de modulos, con module.exports es la manera de decirle que voy a exportar un modulo, esta pensado para ser parte de algo mas grande
lo uqe esta diciendo es que par aesta parte de la aplicacion, para el metodo get, para ese path, ejecuta esa funcion, 
render es un metodo especifico de express que renderiza sus vistas  para que sean sintacticamente correctos para express
mi metodo render dice mostra la vista index con el titulo ponele express, todo esto en la carpeta rutas en el archivo index.js
y la aplicación express sabe que tiene que ir a buscar el archivo index de la carpeta views, ojo, eso el modulo no lo sabe, el que lo sabe es el que consume este modulo, el que lo sabe es express
eso lo dijo en el archivo app.js donde le dijo que las vistas van a estar en tal lugar
la aplicacion express esta configurada para siempre que me den algo, renderizalo y metelo como title y otro algo metelo como body, el objeto que vemos (index) es el objeto que voy a inyectar a la vista, en index.hbs

en ningun lado le dijo que el layout es layout.hbs, en este es por default, pero tambien le puedo especificar otro layout

con esto digo que voy a recibir un objeto
var routes = require('./routes/index');
var users = require('./routes/users');
y ese objeto lo uso luego , es el modulo que uso con app.use creo

en rutas para definir un parametro hago
router.get('/:userId',function(req,res,next){
//	res.json({name:'pepe',email:'pepe@gmail.com'})
	
});
userId es dinamico, cualquier valor que yo mande va a ser resuleto y me lo va a resolver y devolver en esa ruta
----------------------------------------------------------------------------------------------

mongo

se instala y luego tenes que correr dos consolas de sop, en una mongod y luego en otra el mongo que es la consola y que se conecta a la bd que levanto mongodb
mongo no es relacional, son para insertar documentos en colecciones , cada coleccion tiene que ser independiente semanticamente y no relacionarse con otras colecciones, sino, no deberiamos usar las bases no relacionales
con estas bases norelacionales, no necesito una maquina muy potente, porque lo soluciono con muchos recursos chicos y distribuidos... este escala horizontalmente y las relacionales escalan hacia arriba

mongo se puede usar independientemente del lenguaje en que programo, porque se utilizan drivers para conectarme a la base

mongodb
databases
	collections
		documents
			-CRUD (CREATE,READ,UPDATE,DELETE)
			DOCUMENTS -> JSON

db.micolectccion.insert({a:1,b:2})
lo creo
db.micolectccion.find() me muestra lo que cree

show collections
db.otracoleccion.update({},{}) el primer dato es lo que quiero modificar y el segundo es con que lo quiero modificar
db.otracoleccion.update({lalala},{}), me modifica mi coleccion de documentos, que cumplan con ese filtro
si el filtro aplica a dos documento por default modifica a uno solo, al primero de los documentos unicamente

para modificar todos los documentos que cumplan el filtro tengo que poner db.collect.update({lalala:3},{},{multi:true})

cuando trabajo con node igual que desde la consola, cuando hago find, el resultado va a estar representado por objetos en javascript y voy a tener su id por cada objeto de la colecction

db.otracoleccion.remove(), asi sin filtros borra todo
db.otracolecction.remove({"_id":ObjectId("3452344tbfder53452")})
y ahi me borra el documento de ese filtro, como aca el filtro es el id, borra el doc de ese id, pero tambien pude poner otro filtro, y borra TODOS los que machean ese filtro

ojo, lo que le pongo tiene que estar en formato JSON!!!!

puedo poner db.otracolect.find({a:1}) y va a andar, porque la consola esta implementada en javascript, y por eso mongoshell lo va a interpretar, pero cuando programe, lo voy a tener que hacer con formato JSON si quiero que funcione

en la consola de shell no vamos a hacer nada, porque solo es un shell, vamos al driver de node y ahi es donde vamos a usar mongo

todo esto queda guardado en un archivo con nombtre medio raro que es donde me guarda mi "base de datos", es este archivito y por eso otro dia cuando entro, tiene persistencia

con show dbs me muestra todas las bases de datos que tengo, desde la consola

si quiero usar algo un poco mas comlejo ya tengo que usar mysql

siempre tengo que vaciar la base antes de usarla si tengo dudas de que pueda tener datos

muchas aplicaciones tienen corriendo bases relacionales para lo que necesitan y no relacionales para lo que es muy específico y muy rápido
es muy muy raro que solo me alcance con correr una base de datos norelacional

couchDb,levelDB,cassandra,hadoop,etc,risk son todas bases de datos no relacionales asi como mongodb

son mucho mas rapidas que las relacionales, pero hay que limitar su uso para cuando sirve para lo que yo quiero hacer

cuando nos conectamos estamos asumiendo que estamos con mongodb://localhost:27017/local
el server escucha en un puerto y el cliente usa otro puerto... esto es a donde tengo que ir a buscar por defecto si se que hay una base de datos mongo instalada y es en puerto 27017


mongod --dbpath mypath, asi le digo que lo corra desde donde lo tengo instalado

lo primero que tengo que hacer es que en el directorio que tengo el archivo .js que quiero correr tengo que poner en node el install mongodb desde la consola

luego ejecuto mi archivo como siempre con node pruebaMongo.js 
y me muestra primero null y todo el contenido de db, porque se conectó a la base de datos en el localhost puerto 27017 y corrio la sentencia console.log del js

ahora vamos a probar los cruds que probamos desde la shell pero ahora la sintaxis va a ser distinta porque estoy desde js 

importante: la base de datos queda corriendo pero cuando x error o xok termino mi proceso debo cerrar MI conexion a la base aunque la base siga levantada, eso lo hago con db.close();

el 27017 es el port y test es la base de datos, yo puedo tener conexiones a varias bases 
y varias conexiones a la misma base tambien

con Mongo.connect('mongodb://localhost:27017/test',function(err,db){
me conecto a la bd y si yo tenia levantada text o local y abro otra test2, me levanta otra conexion text2
ojo porque eso es importante

en los js y hbs de userConConection hice la version usando mongo db
-----------------------------------------------------------------------------------

tpgrupal

hay dos formas de plantear las rutas, rpc o rest
en rpc todas son post, una ruta seria barra api guion user para el mismo caso en post seria user
/apo/user en el otro seria api-user
pero con rest es mas semantico y no importa el verbo
despues usamos el POST, PUT Y GET... NO ENTENDI NADA

PARA MANEJAR EL ERROR EN EL CLIENTE TOMAMOS EL JSON DEl response LA RESPUESTA Y PLANETAMOS SI FUE ERROR Y EN BASE A ESO TENEMOS UNA ESTRUCTURA DE TIPO
{
	result .....
	error .....
		HTTP statuscode......
}
porque a veces no nos devuelven siempre 200, y hay que poder detectar que fue error y manejarlo

despues decidimos si usamos dos servidores o uno solo

