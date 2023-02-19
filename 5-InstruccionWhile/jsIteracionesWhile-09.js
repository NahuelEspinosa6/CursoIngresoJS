/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar letiables
	/*let banderaDelPrimero;
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
	document.getElementById("txtIdMinimo").value=numeroMinimo;*/

	// EJERCICIO 9 BIS
	/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.
	El menor de los pares y el mayor de los negativos ...(solo si hay) */

	let banderaDelPrimero;
	let banderaDePares;
	let banderaMayorNegativo;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let mayorNegativo;
	let menorPar;
	let respuesta;
	
	//iniciar variables
	banderaDelPrimero = true;
	banderaDePares = false;
	banderaMayorNegativo = false;
	respuesta ="si";
	
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

		if (numeroIngresado % 2 == 0) {
			if (!banderaDePares || menorPar > numeroIngresado) {
			  menorPar = numeroIngresado;
			  banderaDePares = true;
			}
		  }
		
		  if (numeroIngresado < 0) {
			if (!banderaMayorNegativo || numeroIngresado > mayorNegativo) {
			  mayorNegativo = numeroIngresado;
			  banderaMayorNegativo = true;
			}
		  }

		respuesta=prompt("desea continuar?", "si");
	} // fin del while
	
	document.write("El numero maximo es: " + numeroMaximo + "<br>");
	document.write("El numero minimo es: " + numeroMinimo + "<br>");
	document.write("El menor de los pares es: " + menorPar + "<br>");
	document.write("El mayor de los negativos es: " + mayorNegativo + "<br>");

}//FIN DE LA FUNCIÓN