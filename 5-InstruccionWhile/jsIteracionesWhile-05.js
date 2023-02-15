/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("Ingrese su sexo");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Error, ingrese su sexo");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN