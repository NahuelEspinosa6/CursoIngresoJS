/* Nahuel Espinosa Fuentes
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// declaro variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	// tomo el dato y lo guardo
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	// parseo el dato a numerico
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	// concateno el texto y realizo la operacion aritmetica
	mensaje = "La suma es " + (numUno + numDos);

	alert(mensaje); // muestro el mensaje (salida)
}

