function mostrar()
{ /* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"  */

	let repeticiones;
	let i;
	
	repeticiones = parseInt( prompt("ingrese la cant. de repeticiones") );

	for(i = 0; i < repeticiones; i++){
		document.write("Hola UTN FRA", "<br>");
	}

}//FIN DE LA FUNCIÓN