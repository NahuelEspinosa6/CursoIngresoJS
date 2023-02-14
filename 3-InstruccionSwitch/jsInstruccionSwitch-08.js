function mostrar()
{
	/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace Frio"
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace Calor"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN