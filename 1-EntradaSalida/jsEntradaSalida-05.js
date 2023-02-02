/* Nahuel Espinosa Fuentes
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*// declaro variables
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	// txtIdNombre
	// txtIdEdad

	nombreIngresado = document.getElementById("txtIdNombre").value; // guardo el dato ingresado
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años"; // concateno el texto
	
	alert(mensaje); // muestro el dato ingresado*/

	// EJERCICIO 5 BIS
	/* Ejercicio 5.bis: se debe mostrar un mensaje :
	"Perez , usted se llama jose y tiene 66 años"
	se debe optener el apellido , de la manera que puedan */

	let nombre;
	let edad;
	let apellido;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido");

	mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años";

	alert(mensaje);

}

