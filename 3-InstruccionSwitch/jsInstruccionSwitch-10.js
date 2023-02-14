function mostrar()
{
	/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

	en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

	en Verano: Se viaja a Mar del plata y Cataratas solamente

	en Otoño: Se viaja a todos los destinos.

	primavera: solo no se viaja a Bariloche */

	let destino;
	let estacion;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;
		case "Otoño":
			switch(destino){
				default:
					mensaje = "Se viaja"
					break;
			}
			break;
		case "Primavera":
			switch(destino){
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;
	}

	console.log(mensaje);

}//FIN DE LA FUNCIÓN