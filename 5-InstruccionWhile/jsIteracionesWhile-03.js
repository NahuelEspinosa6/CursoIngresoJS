/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;

	claveIngresada = prompt("Ingrese la clave");

	while(claveIngresada != "utn750"){
		claveIngresada = prompt("Error, ingrese la clave nuevamente");
	}
	
	mensaje = "Felicidades inicio de sesion con exito"
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN
