EJERCICIO CON POSITION: no se puede usar float pero si podemos usar margin
Se esta usando border box, si no se usa border box se desfaza todo...
los containers no tienen altura, se ajustan al alto del contenido, si se borra alguna section el alto del body y los contenedores se ajustan y se achican
el ancho tambien se ajusta, solo el de las sections, pero el ancho del nav se tiene que mantener fijo
el único width es el del nav
los objetos estan inicialmente todos superpuestos y a los de la derecha, los mando a la derecha con un margin, los de la derecha los pongo como absolute y el body como relative.

top left right y bottom van con position

margin va cuando no uso position

top = 0 es el default asi que no se pone

LA NORMA ES TRATAR DE USAR MARGIN Y NO POSITION, CUANDO USO POSITION ES UNICAMENTE CUANDO NECESITO QUE LOS OBJETOS SE SOLAPEN POR ALGUNA RAZON, Y DESPUES JUEGO CON LAS POSICIONES
ADEMAS, RELATIVE EXISTE SOLO PORQUE ES NECESARIA PARA QUE TENGA SENTIDO EL ABSOLUTE, PORQUE LO IMPORTANTE ES USAR EL ABSOLUTE, PARA MANEJAR EL TEMA DE LOS OBJETOS SOLAPADOS....

CON POSITION:
PONGO EL DE LA DERECHA EN ABSOLUTE CON LEFT EN ALGUNA COORDENADA PERO SIN MARGIN, Y EL DE LA IZQUIERDA CON FIXED, Y EN BODY TENGO QUE PONER RELATIVE PARA QUE EL ABSOLUTE PUEDA FUNCIONAR YA Q ES EL PADRE DEL DE LA DERECHA.

SIN POSITION ABSOLUTE:
PONGO EL DE LA DERECHA CON MARGIN Y SIN PONER ABSOLUTE RELATIVE EN EL BODY, NI EN EL DE LA IZQUIERDA LE TENGO QUE DEJAR POSITION FIXED

