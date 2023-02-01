/* Nahuel Espinosa Fuentes
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// declaro las variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	// guardo los datos obtenidos
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	// parseo el dato a numerico
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	mensaje = "La suma es " + (numUno + numDos); // realizo la operacion aritmetica

	
	alert(mensaje);	
}

function restar()
{
	// declaro las variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	// guardo los datos obtenidos
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	// parseo el dato a numerico
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	// realizo la operacion aritmetica
	mensaje = "La resta es " + (numUno - numDos);
	
	alert(mensaje);
}

function multiplicar()
{ 
	// declaro las variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	// guardo los datos obtenidos
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	// parseo el dato a numerico
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	// realizo la operacion aritmetica
	mensaje = "La multiplicación es " + (numUno * numDos);
	
	alert(mensaje);
}

function dividir()
{
	// declaro las variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;

	// guardo los datos obtenidos
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	// parseo el dato a numerico
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	// realizo la operacion aritmetica
	mensaje = "La división es " + (numUno / numDos);
	
	alert(mensaje);
}

