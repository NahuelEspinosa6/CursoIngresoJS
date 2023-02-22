function mostrar()
{
	/* al presionar el botón repetir el pedido de número hasta que ingresemos el 9.  */

	/*let repeticion;
	let mensaje;
	let i;

	for(i = 0; i < 1000; i++){
		repeticion = parseInt(prompt("Para cortar ingrese '9'"));
		if (repeticion == 9) {
			break;
		}
	}

	mensaje = "Ingreso " + repeticion;

	alert(mensaje);*/

	// 	FOR 5 BIS
	/* For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
	el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	d) La cantidad de alumnos desaprobados (nota < 4) */

	/*let i;
	let suma = 0;
	let nota;
	let sexo;
	let promedio;
	let alumnoTotales = 7;
	let notaMasBaja = 10;
	let sexoNotaMasBaja = "";
	let varonesAprobados = 0;
	let mujeresAprobados = 0;
	let binariosAprobados = 0;
	let alumnosDesaprobados = 0;
	
	for ( i = 1; i <= alumnoTotales; i++) {
		 nota = parseFloat(prompt("Ingrese la nota del alumno " + i));
	  while (nota < 0 || nota > 10 || isNaN(nota)) {
		nota = parseFloat(prompt("Nota inválida. Ingrese la nota del alumno " + i));
	  }
	
	  sexo = prompt("Ingrese el sexo del alumno " + i + " (f, m o b)").toLowerCase();
	  while (sexo != "f" && sexo != "m" && sexo != "b") {
		sexo = prompt("Sexo inválido. Ingrese el sexo del alumno " + i + " (f, m o b)").toLowerCase();
	  }
	
	  suma += nota;
	
	  if (nota < notaMasBaja) {
		notaMasBaja = nota;
		sexoNotaMasBaja = sexo;
	  }
	
	  if (sexo === "m" && nota >= 6) {
		varonesAprobados++;
	  }

	  if (sexo === "f" && nota >= 6) {
		mujeresAprobados++;
	  }

	  if (sexo === "b" && nota >= 6) {
		binariosAprobados++;
	  }
	
	  if (nota < 4) {
		alumnosDesaprobados++;
	  }
	}
	
	promedio = suma / alumnoTotales;
	
	console.log("El promedio de las notas totales es: " + promedio.toFixed(2));
	console.log("La nota más baja es: " + notaMasBaja + " (sexo: " + sexoNotaMasBaja + ")");
	console.log("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + varonesAprobados);
	console.log("La cantidad de mujeres que su nota haya sido mayor o igual a 6 es: " + mujeresAprobados);
	console.log("La cantidad de binarios que su nota haya sido mayor o igual a 6 es: " + binariosAprobados);
	console.log("La cantidad de alumnos desaprobados es: " + alumnosDesaprobados);*/
	
	let i;
	let suma;
	let nota;
	let sexo;
	let alumnoTotales;
	let promedio;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let varonesAprobados;
	let mujeresAprobados;
	let binariosAprobados;
	let alumnosDesaprobados;

	suma = 0;
	nota = 0;
	alumnoTotales = 7;
	notaMasBaja = 10;
	sexoNotaMasBaja = "";
	varonesAprobados = 0;
	mujeresAprobados = 0;
	binariosAprobados = 0;
	alumnosDesaprobados = 0;

	for(i = 1; i <= alumnoTotales; i++){
		nota = parseFloat( prompt("Ingrese la nota del alumno " + i) );
		while(nota < 0 || nota > 10 || isNaN(nota)){
		nota = parseFloat( prompt("Nota invalida, ingrese la nota del alumno " + i) );
		}

		sexo = prompt("Ingrese el sexo del alumno " + i + " (f. m. b)").toLowerCase();
		while(sexo != "f" && sexo != "m" && sexo != "b"){
			sexo = prompt("Sexo inválido. ingrese el sexo del alumno " + i + " (f, m ,b)").toLowerCase();
		}

		suma += nota;

		if (nota < notaMasBaja) {
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}

		if (sexo === "m" && nota >= 6) {
			varonesAprobados++;
		}

		if (sexo === "f" && nota >= 6) {
			mujeresAprobados++;
		}

		if (sexo === "b" && nota >= 6) {
			binariosAprobados++;
		}

		if (nota < 4) {
			alumnosDesaprobados++;
		}

	}

	promedio = suma / alumnoTotales;
	
	console.log("El promedio de las notas totales es: " + promedio.toFixed(2));
	console.log("La nota más baja es: " + notaMasBaja + " (sexo: " + sexoNotaMasBaja + ")");
	console.log("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + varonesAprobados);
	console.log("La cantidad de mujeres que su nota haya sido mayor o igual a 6 es: " + mujeresAprobados);
	console.log("La cantidad de binarios que su nota haya sido mayor o igual a 6 es: " + binariosAprobados);
	console.log("La cantidad de alumnos desaprobados es: " + alumnosDesaprobados);


}//FIN DE LA FUNCIÓN