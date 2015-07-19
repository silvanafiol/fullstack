
var i=0;
var parImparMensaje;
//este resultado se ve en la consola en inspeccionar elemento


while(i<1000)
	{
	parImparMensaje = i%2===0?"Par":"Impar";	
	console.log("para el numero " + i + " es " + parImparMensaje);
	i++;
	};