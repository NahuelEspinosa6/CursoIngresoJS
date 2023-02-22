function mostrar()
{
	/* al presionar el botón pedir un número. mostrar los numeros
	divisores desde el 1 al número ingresado, y mostrar
	la cantidad de numeros divisores encontrados. */

	let numero;
	let divisores;
	let cantDivisores;
	let i;

	divisores = "";
	cantDivisores = 0;

	numero = parseInt( prompt("Ingrese un numero") );

	for(i = 1; i <= numero; i++){
		if (numero % i == 0) {
			divisores += i + " ";
			cantDivisores ++;
		}
	}

	document.write("Divisores: " + divisores + "<br>");
	document.write("Cantidad de divisores: " + cantDivisores + "<br>");

}//FIN DE LA FUNCIÓN