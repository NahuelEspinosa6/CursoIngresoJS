/* Nahuel Espinosa Fuentes
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*let dividendoTexto;
	let divisorTexto;
	let dividendo;
	let divisor;
	let mensaje;

	dividendoTexto = document.getElementById("txtIdNumeroDividendo").value;
	divisorTexto = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendoTexto);
	divisor = parseInt(divisorTexto);

	mensaje = "El resto es: " + dividendo % divisor;

	alert(mensaje);*/

	// EJERCICIOS 8
	/* Ejercicio 8.bis: Ingresar dos numeros por id
	Se pide:
	mostrar por alert:
	a) La suma de los dos numeros
	b) El promedio de los numeros
	c) El modulo de los numeros (el primero en modulo del segundo) */

	let numUno;
	let numDos;
	let mensajeSuma;
	let mensajePromedio;
	let mensajeModulo;

	numUno = document.getElementById("txtIdNumeroDividendo").value;
	numDos = document.getElementById ("txtIdNumeroDivisor").value;

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//A
	mensajeSuma = "La suma es " + (numUno + numDos);
	//B
	mensajePromedio = "El promedio de los numeros es: " + ((numUno + numDos) / 2);
	//C
	mensajeModulo = "El Modulo de ambos numeros es: " + numUno % numDos;

	alert(mensajeSuma);
	alert(mensajePromedio);
	alert(mensajeModulo);
}
