function mostrar()
{
	/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */
	
	// asignar variables
	let numRandom;
	let mensaje;

	// se genera un numero random del 1 al 10
	numRandom = Math.ceil( (Math.random()* 10) ); //Math.ceil redondea para arriba

	mensaje = "Numero random: " + numRandom;

	alert(mensaje);

}//FIN DE LA FUNCIÓN