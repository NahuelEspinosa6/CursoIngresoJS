/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	/*let i;

	i = 10;

	while(i > 0){
		console.log(i);
		i = i -1;
	}*/


	//EJERCICIO 2 BIS
	/* while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos) */

	/*let numeroIngresado;
	let i;
	let contador;
	let mensaje;

	i = 1;
	contador = 0;
	numeroIngresado = 0;

	while(i < 6){
		numeroIngresado = parseInt( prompt("Ingrese un numero") );

		if (numeroIngresado >= 10 && numeroIngresado <= 20) {
			contador = contador +1;
		}

		i = i +1;
	}

	mensaje = "la cantidad de numeros entre 10 y 20 son:";
	console.log(mensaje + contador);*/


	// EJERCICIO 2 BIS BIS
	/* While 2 bis bis: Ingresar numeros hasta que el usuario quiera. Determinar la cantidad
	de números que son mayores que 10 y menores 20 (inclusive en ambos casos). También el
	promedio de los números que cumplen la condición anterior. */

	let numeroIngresado;
	let i;
	let contador;
	let respuesta;
	let promedio;
	let suma;

	i = 0;
	contador = 0;
	numeroIngresado = 0;
	promedio = 0;
	suma = 0;
	respuesta = "si";
	
	while(respuesta == "si"){ // principal
		i = i +1;
		numeroIngresado = parseInt( prompt("Ingrese un numero") );
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt( prompt("Error, ingrese un numero valido") );
		}

		if (numeroIngresado >= 10 && numeroIngresado <= 20) {
			contador = contador +1;
			suma = suma + numeroIngresado;
		}

		if(contador > 0){
			promedio = suma / contador;
		}

		respuesta=prompt("desea continuar? si/no");
	} // fin del while principal

	console.log("La cantidad de números entre 10 y 20 son: " + contador);
	console.log("El promedio de los números entre 10 y 20 es: " + promedio);

}//FIN DE LA FUNCIÓN