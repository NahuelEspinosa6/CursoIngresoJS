function mostrar()
{
	/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por
	cada estadia como base, se pide el ingreso de una estacion del año y localidad para
	vacacionar para poder calcular el precio final

	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un
	descuento del 10% Mar del plata tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un
	aumento del 10% Mar del plata tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un
	aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba
	tiene el precio sin descuento */

	let destino;
	let estacion;
	let precioBase = 15000;
	let precioFinal;
	let porcentaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = 20; // descuento
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10; // aumento
					break;
				case "Mar del Plata":
					porcentaje = -20 // aumento
					break;
			}
			break;
		case "verano":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del Plata":
					porcentaje = -20;
					break;
			}
			break;
		default:
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar de Plata":
					porcentaje = -10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	}

	precioFinal = precioBase + (precioBase * porcentaje/100)

	alert("Usted va a pagar $" + precioFinal);


}//FIN DE LA FUNCIÓN