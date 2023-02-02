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

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuento = (sueldo * 0.25);
	sueldoTotal = sueldo - descuento;

	document.getElementById("txtIdResultado").value = sueldoTotal;

}
