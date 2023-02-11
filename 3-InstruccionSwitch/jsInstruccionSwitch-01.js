function mostrar()
{
	/* al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	i es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!." */

	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Enero":
			mensaje = "que comiences bien el año!!!"
			break;
		case "Marzo":
			mensaje = "a clases!!!"
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!"
			break;
		default:
			mensaje = "Sos aburrido"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN