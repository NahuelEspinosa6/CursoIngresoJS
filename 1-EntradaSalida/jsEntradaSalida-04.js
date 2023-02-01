/* Nahuel Espinosa Fuentes
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// txtIdNombre
	let datoIngresado; // declaro variable
	let cajita;

	datoIngresado = prompt("Ingresar dato"); //pido el dato

	// busco como acceder dentro de la caja y mostrar su contenido
	document.getElementById("txtIdNombre").value = datoIngresado;

}

