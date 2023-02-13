function mostrar()
{
	/* al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días. */
	
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch (mesDelAño) {
		case "Abril":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias"
			break;
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Junio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
			mensaje = "Tiene 31 dias"
			break;
		default:
			mensaje = "Tiene 28 dias"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN