/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("Ingrese su sexo");

	while(sexoIngresado.toLowerCase() != "f" && sexoIngresado.toLowerCase() != "m"){
		sexoIngresado = prompt("Error, ingrese su sexo");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado.toLowerCase();
	
}//FIN DE LA FUNCIÓN