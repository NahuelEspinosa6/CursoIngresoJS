/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// declaro variables
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	// inicializo las variables
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si"){
		contador = contador +1;
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
		}else{
			multiplicacionNegativos *= numeroIngresado;
		}

		respuesta = prompt("quiere ingresar otro numero", "si");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN