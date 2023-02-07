function mostrar()
{
	// Al ingresar una edad solo debemos informar si la persona NO es adolescente

	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 || edad > 17){
		alert("Usted no es adolescente")
	}

}//FIN DE LA FUNCIÓN