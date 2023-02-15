/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si"){
		contador = contador +1;
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("quiere ingresar otro numero", "si");
		acumulador = acumulador + numeroIngresado;
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
	
}//FIN DE LA FUNCIÓN