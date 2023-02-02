/* Nahuel Espinosa Fuentes
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let descuento;
	let sueldoTotal;
	let porcentaje;

	porcentaje = 25;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuento = (sueldo * porcentaje/100);
	sueldoTotal = sueldo - descuento;

	document.getElementById("txtIdResultado").value = sueldoTotal;

	// EJERCICIO 10 BIS
	/* Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
	Transformarlo a entero (parseInt), luego
	pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"

	/*let importe;
	let descuento;
	let importeFinal;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = prompt("ingrese el descuento");
	descuento = parseInt(descuento);

	importeFinal = importe - (importe * descuento/100);

	document.getElementById("txtIdResultado").value = importeFinal;*/
}
