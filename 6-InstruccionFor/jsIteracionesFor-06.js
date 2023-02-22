function mostrar()
{
	/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

	let numero;
	let numPares;
	let cantNumPares;
	let i;

	numPares = "";
	cantNumPares = 0;

	numero = parseInt( prompt("Ingrese un numero") );

	for(i = 1; i <= numero; i++){
		if(i % 2 == 0){
			numPares += i + " ";
			cantNumPares ++;
		}
	}

	document.write("Numeros pares: " + numPares + "<br>");
	document.write("cantidad de numeros pares: " + cantNumPares + "<br>");

}//FIN DE LA FUNCIÓN