/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar letiables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar letiables
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
			if(numeroIngresado > numeroMaximo){ // numero ingresado es mayor que numero maximo
				numeroMaximo = numeroIngresado;
				
			}else{
				if(numeroIngresado < numeroMinimo){ // numero ingresado es menor que numero minimo
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta=prompt("desea continuar? si/no");
	} // fin del while principal

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
	
}//FIN DE LA FUNCIÓN