function mostrar()
{
	// Al ingresar una edad debemos informar si la persona es
	//mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años)
	//o niño (menor a 13 años).

	let edad;
	let mensaje;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17){
		mensaje = "Usted es mayor de edad";
	}else{
		if(edad >= 13){
			mensaje = "Usted es un adolescente";
		}else{
			mensaje = "Usted es menor de edad";
		}
	}

	alert(mensaje)


}//FIN DE LA FUNCIÓN