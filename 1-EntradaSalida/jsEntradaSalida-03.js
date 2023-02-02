/* Nahuel Espinosa Fuentes
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*let nombreIngresado;
	let mensaje;
	
	//nombreIngresado=txtIdNombre.value; ESTO FUNCIONA SOLO EN GOOGLE
	//					HTML		traer el elemento del ID.value
	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensaje = "Usted ingreso el nombre: " + nombreIngresado;
	
	alert(mensaje);*/

	//EJERCICIO 13 BIS

	/* Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
	El programa deberá mostrar por alert la descripción del producto 
	junto al precio aumentado en un 30%. 
	Pueden utilizar el html del ejercicio 3 para resolverlo. */

	let descripciónProd;
	let precioProd;
	let aumentoProd;
	let precioTotal;
	let mensaje;

	descripciónProd = prompt("Ingrese el producto");
	precioProd = document.getElementById("txtIdNombre").value;

	precioProd = parseInt(precioProd);
	aumentoProd = precioProd * 30/100;
	precioTotal = precioProd + aumentoProd;

	mensaje = descripciónProd + " $" + precioTotal;

	alert(mensaje);

}


