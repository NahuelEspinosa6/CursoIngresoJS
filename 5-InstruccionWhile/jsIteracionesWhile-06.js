function mostrar()
{
	/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
	let contador;
	let acumulador;
	let numeroIngresado;
	let i;
	let promedio;

	i = 0;
	contador = 0;
	acumulador = 0;

	numeroIngresado = parseInt( prompt("Ingrese un numero") );

		// variable		//condicion		 aumento/decremento
	/*for(let i = 0;		i < 5;			i++){
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)

		while(isNaN(numeroIngresado)){ //validacion
			numeroIngresado = prompt("Error, ingrese un numero!!!")
			numeroIngresado = parseInt(numeroIngresado)
		}

		contador = contador +1;
		acumulador = acumulador + numeroIngresado;
	}*/
	
	
	while(i < 5){
		i = i +1;
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)

		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("Error, ingrese un numero!!!")
			numeroIngresado = parseInt(numeroIngresado)
		}

		contador = contador +1;
		acumulador = acumulador + numeroIngresado;
		// cuentas del promedio adentro del while no se hacen

	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador;


}//FIN DE LA FUNCIÓN