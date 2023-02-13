function mostrar()
{
	/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */

	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje = "Se encuentra al Oeste del Pais"
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte del Pais"
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al Este del Pais"
			break;
		default:
			mensaje = "Se encuentra al Sur del Pais"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN