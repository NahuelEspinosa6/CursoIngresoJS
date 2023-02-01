/* Nahuel Espinosa Fuentes
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona; //declaro variable
	nombrePersona = prompt ("¿Cuál es tu nombre?"); //pido el nombre con prompt
	alert(nombrePersona); // muestra el mensaje al final

	/*let nombrePersona;
	let apellidoPersona;

	nombrePersona = prompt ("¿Cual es tu nombre?");
	apellidoPersona = prompt ("¿Cual es tu apellido?");

	alert("Su nombre es " + nombrePersona + " y su apellido " + apellidoPersona); //concatenamos los textos */
}

