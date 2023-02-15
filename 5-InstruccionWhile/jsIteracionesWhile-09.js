/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';
	
	while(respuesta=="si") // principal
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)

		while(isNaN(numeroIngresado)){ //validacion
			numeroIngresado = prompt("Error, ingrese un numero!!!")
			numeroIngresado = parseInt(numeroIngresado)
		}

		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}else{
			if(numeroMaximo < numeroIngresado){ // numerp ingresado es mayor que numero maximo
				numeroMaximo = numeroIngresado;
				
			}else{
				if(numeroMinimo > numeroIngresado){ // numero ingresado es menor que numero minimo
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta=prompt("desea continuar? si/no");
	} // fin del while principal

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimmo").value=numeroMinimo;
	
}//FIN DE LA FUNCIÓN