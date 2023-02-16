/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas
y censos nos pide realizar una carga de datos validada e ingresada por ventanas
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de letiables
 	/*let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numLegajo;
	let nacionalidad;

	edadIngresada = 0;
	sueldoBruto = 0;
	numLegajo = 0;
	estadoCivilIngresado = 0;

	edadIngresada = parseInt( prompt("Ingrese su edad (entre 18 y 90 años inclusive)") );
	sexoIngresado = prompt("Ingrese su sexo, M o F");
	estadoCivilIngresado = parseInt( prompt("Ingrese (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)") );
	sueldoBruto = parseInt( prompt("Ingrese su sueldo bruto") );
	numLegajo = parseInt( prompt("Ingrese su numero de legajo") );
	nacionalidad = prompt("ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");

	while (edad < 18 || edad > 90) {
		edad = parseInt(prompt("Edad inválida. Ingrese su edad (entre 18 y 90 años inclusive):"));
	}
	
	while (sexo !== "M" && sexo !== "F") {
	sexo = prompt("Sexo inválido. Ingrese su sexo, M o F:");
	}

	while (estadoCivil < 1 || estadoCivil > 4) {
	estadoCivil = parseInt(prompt("Estado civil inválido. Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados, 4-para viudos):"));
	}

	while (sueldoBruto < 8000) {
	sueldoBruto = parseInt(prompt("Sueldo bruto inválido. Ingrese su sueldo bruto (no menor a 8000):"));
	}

	while (numLegajo < 1000 || numLegajo > 9999) {
	numLegajo = parseInt(prompt("Número de legajo inválido. Ingrese su número de legajo:"));
	}

	while (nacionalidad !== "A" && nacionalidad !== "E" && nacionalidad !== "N") {
	nacionalidad = prompt("Nacionalidad inválida. Ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados):");
	}*/

	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let numLegajo;
	let nacionalidad;
	
	edadIngresada = parseInt( prompt("Ingrese su edad (entre 18 y 90 años inclusive)") );
	sexoIngresado = prompt("Ingrese su sexo, M o F");
	estadoCivilIngresado = parseInt( prompt("Ingrese (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)") );
	sueldoBruto = parseInt( prompt("Ingrese su sueldo bruto") );
	numLegajo = parseInt( prompt("Ingrese su numero de legajo") );
	nacionalidad = prompt("ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
	
	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = parseInt(prompt("Edad invalida, ingrese su edad (entre 18 y 90 años inclusive)"));
	}
	
	while (sexoIngresado.toLowerCase() !== "m" && sexoIngresado.toLowerCase() !== "f") {
		sexoIngresado = prompt("Sexo invalido, ingrese su sexo M o F");
	}
	
	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		estadoCivilIngresado = parseInt(prompt("Estado civil invalido, ingrese (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"));
	}
	
	while (isNaN(sueldoBruto) || sueldoBruto < 8000) {
		sueldoBruto = parseInt(prompt("Sueldo bruto invalido, ingrese su sueldo bruto"));
	}
	
	while (isNaN(numLegajo) || numLegajo < 1000 || numLegajo > 9999) {
		numLegajo = parseInt(prompt("Numero de legajo invalido, ingrese su numero de legajo"));
	}
	
	while (nacionalidad.toLowerCase() !== "a" && nacionalidad.toLowerCase() !== "e" && nacionalidad.toLowerCase() !== "n") {
		nacionalidad = prompt("Nacionalidad invalida, ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
	}	

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;


}
