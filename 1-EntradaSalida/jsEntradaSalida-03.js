/* Nahuel Espinosa Fuentes
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensaje;
	
	//nombreIngresado=txtIdNombre.value; ESTO FUNCIONA SOLO EN GOOGLE
	//					HTML		traer el elemento del ID.value
	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensaje = "Usted ingreso el nombre: " + nombreIngresado;
	
	alert(mensaje);

}


