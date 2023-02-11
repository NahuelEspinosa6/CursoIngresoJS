function mostrar()
{
	/* al seleccionar un mes informar.
	si estamos en Invierno: "Abrigate que hace frio."
	si aún no llego el Invierno: "Falta para el invierno."
	si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

	let mesDelAño;
	let mensaje;

	switch(mesDelAño){
		case "Enero":
			mensaje = "Falta para el invierno"
			break;
		case "Febrero":
			mensaje = "Falta para el invierno"
			break;
		case "Marzo":
			mensaje = "Falta para el invierno"
			break;
		case "Abril":
			mensaje = "Falta para el invierno"
			break;
		case "Mayo":
			mensaje = "Falta para el invierno"
			break;
		case "Junio":
			mensaje = "Falta para el invierno"
			break;
		case "Julio":
			mensaje = "Abrigate que hace frio"
			break;
		case "Agosto":
			mensaje = "Abrigate que hace frio"
			break;
		case "Septiembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!"
			break;
		case "Octubre":
			mensaje = "Falta para el invierno"
			break;
		case "Noviembre":
			mensaje = "Falta para el invierno"
			break;
		case "Diciembre":
			mensaje = "Falta para el invierno"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN