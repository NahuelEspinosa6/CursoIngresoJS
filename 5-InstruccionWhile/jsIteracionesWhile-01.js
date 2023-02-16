/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	// declaro variable
	/*let i;

	// inicializo la variable
	i = 1;

	while(i < 11){
		alert(i);
		i = i +1;
	}*/

	//EJERCICIO 1 BIS
	/* While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven */
	
	let edadIngresada;
	let edadMenor;
	let edadMayor;
	let nombreIngresado;
	let personaMayor;
	let personaMenor;
	let banderaDelPrimero;
	let respuesta;

	banderaDelPrimero = true;
	respuesta = "si"

	while(respuesta == "si"){
		nombreIngresado = prompt("Ingrese su Nombre");
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt("Error, ingrese un nombre valido");
		}
		edadIngresada = parseInt( prompt("Ingrese su edad") );

		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 123){
			edadIngresada = parseInt( prompt("Error, ingrese una edad valida") );
		}

		if (banderaDelPrimero == true) {
			edadMayor = edadIngresada;
			edadMenor = edadIngresada;
			banderaDelPrimero = false;
		}else{
			if (edadIngresada > edadMayor) {
				personaMayor = nombreIngresado;
				edadMayor = edadIngresada;
			}else{
				if (edadIngresada < edadMenor) {
					personaMenor = nombreIngresado;
					edadMenor = edadIngresada;
				}
			}
		}

		respuesta=prompt("desea continuar? si/no");
	}

	document.write("El nombre de la persona menor es:" + personaMenor + "<br>");
	document.write("La edad de la persona menor es:" + edadMenor + "<br>");
	document.write("El nombre de la persona mayor es:" + personaMayor + "<br>");
	document.write("La edad de la persona mayorr es:" + edadMayor + "<br>");






	//EJEMPLO
	/*al presionar el botón "mostrar", mostrar 125 repeticiones 
	con números ASCENDENTE, desde el 1 al 125. 
	a) contar los numeros IMPARES 
	b)contar los numeros PARES,
	c)el total de la suma de los numeros impares
	d)el total de la suma de los numeros pares
	e)el mayor de los numeros impares; 
	f)el mayor de los numeros; 
	*/

	/*//declaro la varible
	let i;
	let contadorNumeroPares; 
	let contadorNumerosImpares; 
	let acumuladorNumeroImpares;
	let acumuladorNumeroPares;
	let mayorNumeroImpar; 
	let mayorNumero; 

	//inicializar la variable
	i = 10; 
	contadorNumeroPares = 0; 
	contadorNumerosImpares = 0; 
	acumuladorNumeroImpares = 0; 
	acumuladorNumeroPares = 0; 
	mayorNumeroImpar = 1; 
	mayorNumero = 0; 


	while(i < 125)
	{
		if(i%2 != 0) // esto es un impar 
		{       
			//a) contar los numeros IMPARES                    0      
			contadorNumerosImpares = contadorNumerosImpares + 1;
			//c)el total de la suma de los numeros impares
			acumuladorNumeroImpares = acumuladorNumeroImpares + i;
			//e)el mayor de los numeros impares; 
			if(i > mayorNumeroImpar)
			{
				mayorNumeroImpar = i; 
			}
		}
		else
		{	//d)el total de la suma de los numeros pares
			contadorNumeroPares = contadorNumeroPares + 1;
			acumuladorNumeroPares = acumuladorNumeroPares + i;	
		}

		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}

		//modificar la condicion de uno en uno 
		i= i + 1; 

		//moestrar el contador
		console.log(i); 
	}//fin de while



	console.log("La cantidad de numeros impares es: " + contadorNumerosImpares); 
	console.log("La cantidad de numeros pares es: " + contadorNumeroPares); 
	console.log("el total de la suma de los numeros Impares "+acumuladorNumeroImpares); 
	console.log("el total de la suma de los numeros Pares "+acumuladorNumeroPares); 
	console.log("el mayor de los numeros impares "+ mayorNumeroImpar); 
	console.log("el mayor de los numeros es: "+ mayorNumero); */

}//FIN DE LA FUNCIÓN