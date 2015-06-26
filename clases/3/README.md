repositorio usado para el curso de fullstack, creado en la clase 3
en un html lo que está a la derecha se llama      developer tools y lo que está a la izquierda es lo que se ve en el html cuando lo ejecuto
se abre con f12 o con control shift j o con boton derecho y despues inspeccionar elemento... además en la lupa que est+a en la pagina de codigo, si la presinamos nos permite elegir el elemento y va directo al codigo del elemento...
en la pestaña de network me permite ver el trafico de red, viendo que archivos se bajaron y cto pesan...
en la pestaña de elements veo el codigo de cad elemento
a la derecha puedo ver las clases aplicadas para el elemento que seleccionamos... 	
lo que tenemos abajo por ej user agent stylesheet, es las reglas de html que aplica por default de acuerdo a la etiqueta que estamos usando...
cuando ponemos click en la llave del elemento a la derecha, podemos modificar ese styles, para ver como queda y lo vemos aplicado en el html de la izquierda... obviamente no se guarda... si nos gusta, lo ponemos despues en el css de verdad y lo guardamos
entonces en la solapa styles de la derecha tenemos todo el codigo de css,
en la solapa computed tenemos todo lo de css que estan aplicadas en mi html, entonces si no sabemos el valor que puede tomar una property ahi lo podemos ver
antes para manejar un ahcho de un objeto tenía que hacer cuentas, para restar el padding y el border al margin y todo eso... ahora es mucho más fácil...y tenía que poner en el width del content el valor restado para que el size del box sea realmente lo que yo quería... ahora existe la propiedad BOX-SIZING y directamente te toma el valor que vos queres, lo que te da son los valores posibles... el default es content-box que es el default y es lo mismo que si no lo ponemos... es el comportamiento errático como el que tenía antes... pero si le ponemos border-box y no content-box, usa lo de achicar todo el box
en styles puedo marcar el costado la propiedad en el checkbox y ahi automáticamente lo tacha y queda comentado en el código y deja de aplicarse

una página llamada caniuse.com sirve para mostrarnos qué se puede usar en cada browser en cada país, de todo
vamos a esa página y ponemos box-sizing, ahi nos dice que es de CSS3, entonces nos dice que lo soportan browsers como IE8 en adelante, firefox 37, chrome 39, etc... es importante para saber con qué estoy trabajando y así, lo que programamos se puede usar.ademas como nos dice que el % de uso en argentina es del 98%, bueno, lo usamos y listo

otra cosa: si vamos a usar por ej box-sizing se pone en content, porque hay que ser consistentes y uniformes, o la usamos en todos lados o no la usamos, no se puede hacer que algunos objetos de mi página la tengan y otros no, entonces para que todos los objetos lo tomen se pone en el css, en body {} pero mejor en *{}, pero si lo pongo en * aplica a todos por eso es mejor, porque si lo pongo en body, solo aplica al body

hay propertys que se heredan para los objetos bajo mi objeto y hay otras que no, para saber cual se hereda voy a la pag de help de mozila y pongo box-sizing y ahi veo si es heredable o no... si es heredable no hay drama pero si no, como es este caso, la tengo que poner en cada uno de los objetos, y para evitar eso la pongo en el *{} del css.... si hago eso, cuando voy a inspeccionar los elementos, en style voo que tiene la propiedad, aunque no la tenga escrita cada elemento, y eso es porque la puse en el * y no porque la heredaron porque no se hereda esta propiedad!!!

otra propiedad, position:
el default es position static, ese valor es lo mismo ponerlo que no ponerlo....
le podemos poner relative... y entonces definirle top y left por ej, porque no tiene mucho sentido mover todos los vértices, con poner solo top y left estamos ubicando todo el objeto, salvo cdo queremos que se pegue a la derecha... relative lo desplaza a partir del valor que tenía cuando estaba definido como static, tambien se pueden usar porcentajes, con todo esto logramos que se mueva, se centre (por ej si en el left le pongo 50% lo centra porque toma el 50% del width del contenedor, o sea que lo centra correspondiente a su contenedor padre)


en subline contro shift e  o d no se... duplica la linea

cuando pongo position relative y absolute... y dirijo a los hijos directos con relative y absolute... y en cero, busca para arirba al primer padre que encuentre con position relative y se ubica en el cero de ese objeto... esto esta bueno para solapar objetos

regla: 	relativo es relativo al posicionamiento default donde debia estar el elemento
		absoluto toma en cuenta para posicionarse el primer parent con posicionamiento , es decir con posicionamiento distinto de static que es el default, y lo posiciona con respecto a ese parent. (tanto sea el posicionamiento relative o absolute, pero static)

el valor fixed: toma como referencia el browser, es decir el tamaño de la ventana...si le pongo bottom 0, me lo deja pegado al margen de abajo....
siempre que tenga un elemento con position fixed, DEBO ponerle la propiedad height, porque justamente debo saber cómo ubicar el resto del body que no esté dentro de esta parte del fixed.
No se usa con porcentajes, porque no estaria bien, no tendria sentido... debe ser fijo y el resto del contenido, fuera de este objeto, si, utilizar ese valor y ubicarse considerando eso
esto tiene sentido mucho en el posicionamiento vertical

en el unico caso que se usaria % con fixed me parecio entender que es en dispositivos móviles y en lo que hace al ancho, y no al height


el fixed escapa del html normal entonces a todo el otro resto de html lo saltea... entonces para que no lo saltee, puedo poner al body con padding del ancho del head, y ahi solucionamos el asunto, pero es la forma menos usada....
en realidad lo que quiero dejar es un margen y no un padding, entonces lo mejor es al body darle un margin o poner todo el body en un div y darle un margin al div

ctrl shift p una vez ya seleccionado el texto que quiero ordenar, por c etiquete, me ordena las propiedades alfabétiamente... o con f9

con esto si el body se viene muy grande, se me crea una barra scroll y scrollea dejando el menu libre

igualmente no es recomendable usar position, es recomendable usar otras técnicas, como el caso de FLOAT y usar position solo cuando no nos sirven las demás técnicas

con float puedo ubicar objetos que floten a la izq o a la derecha con respecto a otro objeto padre... dentro del objeto padre... pero hay que agregar algo mas....al usar el flotado lo hacemos navegar pero de alguna forma hay que cortar el flotado, porque sino todos los objetos flotan a la misma altura y se van alineando y además no toma el height de cada uno de los elementos que estan flotando.... y yo quiero que vayan bajando....para decirle donde es la altura en la que te tienen que dejar de flotar
hay dos formas, una con clear , que corta los flotados por cada lado, o con clear both que te corta el flotado de ambos lados....
clear tiene valores posibles, left corta el flotado de la izq, right corta el de la derecha, si es que tengo flotado de ese lado, sino no lo hace... 


pero para esto tuvimos que agregar un div con class br... o sea agregar un elemento adicional... para evitar esto es mejor usar: clearfix, que la definimos como clase, y que tiene la propiedad overflow, que lo que hace es controlar cuando algo se excede, LO MEJOR ES USAR ESTO PORQUE DE ALGUNA FORMA APLICA EL FLOTADO AL DIV PADRE Y HACE QUE EL MISMO DIV PADRE SEA EL QUE DEFINE DONDE TERMINA EL FLOTADO.. Y NO DEJA EL FLOAT ABIERTO Y QUE ALGUIEN SE ACUERDE DE CERRARLO PORQUE SINO TODO QUEDA FLOTANDO

cuando le ponemos float el div pasa a tener el ancho del contenido y no el ancho del padre

salvo cuando le ponemos la propiedad width, o maxwidth... y ahi se ajusta, pero ojo, ahi no le tendria que poner heigth porque ahi cuando el contenido baja debido al maxwidth, se me baja y afecta al height... lo que puedo hacer ahi es solo poner un maxwidth y un minheight, y eso si esta bien y tiene sentido


ACORDARME QUE CON LOS ELEMENTOS QUE DEFINO INLINE NO PUEDO DEFINIRLES ALTURA...
POR LO TANTO EL CLEARFIX Y FLOAT SOLO SE USA CUANDO TENGO QUE FLOTAR EN AMBOS LADOS, SI YO NO NECESITO QUE LAS COSAS SE PEGUEN Y TENGAN ALTURA, USO INLINE Y NO ME MOLESTO CON LAS COMPLICACIONES DE FLOAT

HAY OTRA FORMA QUE ES DISPLAY INLINE-BLOCK!!!!!
la diferencia entre usar inline e inline-block es que inline no respeta el height

con display none, no los muestra, no ocupan espacio visualmente pero siguen estando en el html... no es visibility, eso es otra cosa pero no lo escuché




CENTRADO VERTICAL:
1)
una forma muy basica es tener un elemento con inline block con width 0 y height 100%
adentro de ese elemento tener otros elementos con inline block, entonces los de adentro se centran con el de afuera...esto es para centrado dinámoco, obvio que no se usa para objetos de ancho fijo, esto es para cuando varían y entonces hay que centrarlo verticalmente en forma dinámica

en el ancho es facil porque esta la propiedad AUTO que lo hace sola, pero en altura no es facil y se puede hacer usando esto del inline block

2)
hay una propiedad que es vertical-align, que aplica a inline-level y table-cell elements, pero table-cell es algo de css que no es conveniente usar porque no es bueno

3) 
activando la propiedad flexbox al contenedor de algo, logramos que sus hijos puedan alinearse




EN LA PAGINA DE MDN: MOZILA DEVELOPER NETWORK, buscar en msn el content y el ::before y ::after que son pseudoelementos y esta bueno ver su uso, antes se usaba con un solo : y no con doble ::, porque las versiones de internet explorer antiguas no lo soportan