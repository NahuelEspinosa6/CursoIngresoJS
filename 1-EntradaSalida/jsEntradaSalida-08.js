/* Nahuel Espinosa Fuentes
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendoTexto;
	let divisorTexto;
	let dividendo;
	let divisor;
	let mensaje;

	dividendoTexto = document.getElementById("txtIdNumeroDividendo").value;
	divisorTexto = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendoTexto);
	divisor = parseInt(divisorTexto);

	mensaje = "El resto es: " + dividendo % divisor;

	alert(mensaje);
}
