127.0.0.1:1337

127.0.0.1 soy yo
hasta los dos puntos, se supone que es mi pc
si quisiera acceder a un puerto menor al 1024 deberia tene permisos de administrador, dependiendo en que puerto lo quiera

mayores a 1024, es nac end pop o sea para todos y todas


## Puertos
mayores a 1024 -> nac & pop
menores a 1024 -> tenes que tener permisos de administrador

vosno vas a poder trabajar en tu pc en un server donde los usarios accedan por default porque http entra por default en el puerto 80, si no pongo puerto es lo mismo que ingresar al puerto 80 que es el default y https es 443

 
var http = require('http') va a ser la manera de usar http en nuestros programas

var fn = function (req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'}); 
	//aca esto esta pasando al paremetro res porque es el unico que podemos modificar... 
	res.end('hello world\n'); este metodo me permite escribirle al body lo que pongo aca
}

var server = http.createServer (fn);
server.listen(1337);
console.log('server running at http://127.0.01:1337');


todo http tiene un header y un body

el chrome es el cliente en este caso y cdo voy a la consolar y veo en response, veo que me responde hello world

favicon.ico es el iconito que tenemos arriba en la solapita del browser...

curl es una forma de hacer peticiones al servidor, pero a mi no me anduvo

uds. tienen un servidor http y uds. desean servir un servidor que tengo en mi escritorio....

Ahora va a tratar de emular lo que hace el servidor phyton:

me llega una solicitud a un path en particular, entonces
si la url es / entonces
	me fijo que onda index.html o index.pha o index.aspx o etc....
si la url es /texto.txt y existe
	entonces leo texto.txt y lo escribo a la salida o respuesta
	seteo el content type y escribo 200 de status code
	termino la respuesta
si no existe -> 404
	termino la respuesta
end si;


x lo gral cuando uso php, se instala un servidor standard que interpreta ese codigo php que le paso
aca estamos tratando de que el servidor interprete mi javascript sin instalar nada

cuando yo uso javascript quiero correr javascript en el servidor, que me genere una rta y eso vaya al navegador, y le pase tags que se interpreten y ejecuten en el navegador cliente esa respuesta
lo que estamos buscando es correr javascript en el server, antes de dar la respuesta al navegador, por ej buscar algo en la base de datos y recien despues devolver código que pueda interpretar el navegador
o sea que del lado del servidor no necesito tener un browser...



la idea no es servir contenido estático, porque html y css lo recibo con apache y ya esta, no necesito usar jnode
en cambio cuando tiene sentido usar jnode, cuando tengo una base de datos, el contenido no es estatico, si yo ejecuto python -m SimpleHTTPServer no necesito jnode, cuando tiene sentido es cuando las cosas son complejas como recursos de bases de datos o algo de mi sistema operativo, cuando el renderizado de mi pagina es siempre el mismo contenido, mi javascript lo puedo poner en un servidor node estático y despues voy a levantar otro servidor node, donde mi pagina en tiepo de ejecución se va a conectar con ese servidor node dinámico que se va a conectar con una url dinámica y dependa de los parametros que le paso... es buena practica separar los tantos y usar un servidor estatico ya hecho para servir el contenido estático porque node no es para esto, no conviene usar node para eso, y que se banque miles de usuarios... en cambio me conviene tener abierto otro servidor y que este otro servidor node sea para lo dinamico


json es un objeto para pasar cosas de objeto a texto y viceverza, conceptualmente json es un formato para pasar cosas de objeto a texto y viceverza... funciona mediante una lista de elementos tipo array o mediante llaves
JSON.stringify(obj)
'{"a":1}'

JSON.parse de algo tipo jason, me lo pasa a un objeto javascript

las keys de los objetos van entre comillas

siempre para trabajar un json vamos a usar el json.parse, porque no tiene sentido trabajarlo en string, siempre cuando estamos esperando un json hay que usar un try catch, porque si no da error, entonces es un json y podemos seguir trabajando
nos vamos a comunicar con json del cliente al servidor y viceverza


el servidor http existe y esta corriendo, haya clientes o no, luego cuando un cliente manda una solicitud, el servidor le quiere mandar datos al cliente, la unica forma de que el cliente obtenga los datos http del cliente es haciendo polling  o long-polling, porque en http pelado no existe el concepto de mandar informacipon al cliente, esto es como el gmail cuando me manda los mails ni bien abro aunque yo no de refresh, por ej mediante timeouts o como sea, y se los solicita permanentemente. Long-polling es un poco mejor que cuando hay contenido nuevo en el servidor solito se lo devuelve al cliente.

ahora vamos a simular una aplicacion de twitter


una pagina no puede hacer un request a otro host, por definicion, salvo que el otro host responda en el header que él permite hacer requests a otro host.
antes se hacia flash que era un plug in en el medio para hacer request a otro host
http esta pensado originalmente para hacer request al host ppal
tiene que ver ocn el navegador
yo desde node lo puedo hacer, pero desde los navegadores no, porque no son clientes https universal y me va a dar error y es algo muy comun

no puede haber dos request en curso respondiendose, se van a resolver secuencialmente...
código sincronico no puede resolverse mas de uno a la vex, por lo tanto si pongo un loop infinito, cuelgo el servidor

esto gana en el codigo asincronico, porque el codigo sincronico bloquea al servidor

gquery tiene una utilidad que se llama $.ajax o tiene shortcuts como $.get o $.post

$ajax(obj).then(fn1).catch(fn2);
function fn2(response,body);


en el proyecto, todo lo que está en la carpeta public es lo que va a parar al cliente, lo que está en la carpeta del proyecto 
si pongo npm install me instala todo lo que tengo dentro de dependencies de mi .json , de lo contrario tengo que poner npm install y cada uno de los paquetes

si cuando estoy programando descubro que necesito nuevos modulos, pongo en node npm intall -- save y el modulo y no solo me lo instala sino que me guarda la dependencia en el archivo .json

luego voy al browser y pongo localhost:8000 enter y me abre la aplicacion

con controlc paro el servidor!!!! porque cada vez lo tengo que parar, el cliente no!!!

