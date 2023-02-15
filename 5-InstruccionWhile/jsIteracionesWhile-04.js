/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("Ingresen un numero entre 0 y 9");
	numero = parseInt(numero);

	while(isNaN(numero) || numero < -1 || numero > 10){
		numero = prompt("Error, ingrese un numero entre 0 y 9");
	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN