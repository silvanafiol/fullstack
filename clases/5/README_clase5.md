javascript clase5

las statements producen valores y los expressions no producen valores
tener cuidado que las cosas que no devuelven nada, devuelven implicitamente undefined pero eso no significa que devuelvan algo...siguen siendo expressions
no olvidar que toda expression es una statement, pero no toda statement es una expression

todo lo que yo ponga en una evaluación y que yo sepa de antemano que se evalúa a true es un trutie y todo lo que sepa que se evalúa a false es un falsie
por ejemplo 
Boolean("")
da false, es un falsie, pero
Boolean("   ")
da true, es un trutie

en la expression do... while... la acción se hace y luego evalúa la condición del while
entonces ¿si mi condición de fin de while era que i sea menor que 10, por que el do while devuelve cuando vale 10?
eso pasa porque i++ devuelve el valor inicial de i, aún después de incrementar, en cambio ++i devuelve el valor final de i, después de incrementar.

con los loops se puede salir x la condición o se puede salir con break, pero es muy mala costumbre salir con break

con continue, lo que logramos es que se ejecute el siguiente ciclo, pero sin completar el presente ciclo...
no es buena práctica usar el continue....

existe la función isNaN que nos dice si algo no es un número o si.

isNaN(234234)
false
también tenemos la función Number(x) que convierte a numérico
entonces Number("f")>7 va a dar false

funciones:
str.indexOf("werw"); posicion de ese subtexto en la cadena str
str.lastindexOf("sdfasdf"); ultimo valor de la cadena str
str.toUpperCase("Sfsf"); pone todo en mayusculas
str.toLowerCase("sdfasdf");
str.substr(indexA[,indexB]) indexA es desde donde, indexB es hasta donde, si no le ponemos indexB cuenta hasta el final
tambien se puede usar y es mas facil poniedo str.sustr(-indexA,B) y esto hace desde la posicion final menos A, B caracteres... es mucho mas facil

str.substring creo que es la que se puede usar asi



arrays:

index.js
switch.js
terminal
> var arr = new Array("elem1", "elem2");                                                                                                                                                        
undefined                                                                                                                                                                                       
> var arr = Array("elem1", "elem2");                                                                                                                                                            
undefined                                                                                                                                                                                       
> var arr = [ "elem1", "elem2" ]                                                                                                                                                                
undefined                                                                                                                                                                                       
> arr.length                                                                                                                                                                                    
2                                                                                                                                                                                               
> arr[0]                                                                                                                                                                                        
'elem1'                                                                                                                                                                                         
> arr[1]                                                                                                                                                                                        
'elem2'       

con esto agrego elementos a un array:                                                                                                                                                                                  
> arr.push("elem3")                                                                                                                                                                             
3                      

habiamos visto que a un tipo string no lo podia cambiar porque era un tipo primitvo
pero a los tipos no primitivos, como arrays, si, los puedo modificar a sus elementos, y tambien puedo agregar y sacar elementos, la modificación se hace con "modif"
 arr[1]                                                                                                                                                                                        
'elem2'                                                                                                                                                                                         
> arr[1] = "elem2-modif";                                                                                                                                                                       
'elem2-modif'                                                                                                                                                                                   
> arr                                                                                                                                                                                           
[ 'elem1', 'elem2-modif', 'elem3' ] 
siempre en los array la posicion final coincide con el length:  arr.length 
 arr.length                                                                                                                                                                                    
5                                                                                                                                                                                               
> arr[arr.length] = "elem6"                                                                                                                                                                     
'elem6'                                                                                                                                                                                         
> arr[arr.length] = "elem7"                                                                                                                                                                     
'elem7'                                                                                                                                                                                         
> arr[arr.length]  
 arr.push("elem8")                                                                                                                                                                             
8   
o sea que puedo agregar elementos tanto con  arr.push("elem8") como con  arr[arr.length] = "elem7"      
pero SIEMPRE CONVIENE AGREGAR CON PUSH PORQUE TE GARANTIZA QUE LO AGREGA A LO ULTIMO DEL ARRAY Y QUE NO DEJA HUECOS!!!! QUE DESPUES AL CONSULTARLO NOS PUEDE DAR UNDEFINED.... ESTOS ARRAYS CON HUECOS SE LLAMAN DISPERSOS Y SON UN PROBLEMA!!!!                                                                              

VOLVIENDO A LOS METODOS, HAY METODOS QUE MODIFICAN EL ARRAY Y HAY OTROS QUE NO , PUSH ES UN METODO QUE MODIFICA EL ARRAY... YA QUE AGREGA ELEMENTOS

LO CONTRARIO DE PUSH, SERIA ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY

CREO UN ARRAY NUEVO CON UN ELEMENTO Y USO POP, QUE ES LO CONTRARIO DE PUSH, Y POP A SU VEZ DEVUELVE ESE ULTIMO ELEMENTO
> arr.length                                                                                                                                                                                    
23                                                                                                                                                                                              
> arr[15]                                                                                                                                                                                       
undefined                                                                                                                                                                                       
> var arr = []                                                                                                                                                                                  
undefined                                                                                                                                                                                       
> arr.push("zero")                                                                                                                                                                              
1                                                                                                                                                                                               
> arr                                                                                                                                                                                           
[ 'zero' ]                                                                                                                                                                                      
> arr.pop()                                                                                                                                                                                     
'zero'                                                                                                                                                                                          
> arr.pop()                                                                                                                                                                                     
undefined                                                                                                                                                                                       
> arr.pop()                                                                                                                                                                                     
undefined  


PERO OJO, CON PUSH Y POP MODIFICO EL ARRAY ORIGINAL

EL SHIFT Y UNSHIFT HACEN LO MISMO QUE POP Y PUSH PERO DESDE EL OTRO LADO
> arr                                                                                                                                                                                           
[]                                                                                                                                                                                              
> arr.push("cero")                                                                                                                                                                              
1                                                                                                                                                                                               
> arr.push("uno")                                                                                                                                                                               
YO CREE EL ARRAY Y AHORA QUIERO SACAR EL ELEMENTO CERO, NO LO PUEDO HACER CON POP PORQUE SACARÍA EL ULTIMO ENTONCES USO SHIFT Y SI LO QUIERO VOLVER A PONER AL PPIO USO UNSHIFT
arr                                                                                                                                                                                           
[ 'cero', 'uno' ]                                                                                                                                                                               
> arr.shift()                                                                                                                                                                                   
'cero'                                                                                                                                                                                          
> arr                                                                                                                                                                                           
[ 'uno' ]                                                                                                                                                                                       
> arr.unshift("cero")

POR ULTIMO TENEMOS LAST INDEX OF Y INDEX OF

TAMBIEN PODEMOS AGREGAR ELEMENTOS DE TIPOS DISTINTOS AUNQUE NO ES MUY COHERENTE:
arr                                                                                                                                                                                           
[ 'cero', 'uno', 10, true ] 

ESTO ES MUY LOCO, Y POR ESO NO CONVIENEN LOS ARRAYS HUECOS:
> arr                                                                                                                                                                                         
> Array(9)                                                                                                                                                                                      
[ , , , , , , , ,  ]                                                                                                                                                                            
> var arr = Array(9)                                                                                                                                                                            
undefined                                                                                                                                                                                       
> 1 in arr                                                                                                                                                                                      
false                                                                                                                                                                                           
> arr                                                                                                                                                                                           
[ , , , , , , , ,  ]                                                                                                                                                                            
> arr[1] = undefined                                                                                                                                                                            
undefined                                                                                                                                                                                       
> 1 in arr                                                                                                                                                                                      
true    

-------------------------------------------------

PARA MOSTRAR ARRAYS PODEMOS HACER:
> console.log(arr)                                                                                                                                                                              
[ , undefined, , , , , , ,  ]                                                                                                                                                                   
undefined                                                                                                                                                                                       
> console.log("el array es", arr)                                                                                                                                                               
el array es [ , undefined, , , , , , ,  ]                                                                                                                                                       
undefined                                                                                                                                                                                       
> console.log("uno", "dos")                                                                                                                                                                     
uno dos                                                                                                                                                                                         
undefined                
