/* Nahuel Espinosa Fuentes
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// declaro variables
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	// txtIdNombre
	// txtIdEdad

	nombreIngresado = document.getElementById("txtIdNombre").value; // guardo el dato ingresado
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años"; // concateno el texto
	
	alert(mensaje); // muestro el dato ingresado
}

