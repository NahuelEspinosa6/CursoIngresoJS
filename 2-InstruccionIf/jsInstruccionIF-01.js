function mostrar()
{	// Nahuel Espinosa Fuentes
	// Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita"

	/*let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad == 15){
		alert("niña bonita");
	}/*else{
		alert("No ha ingresado un 15");
	}*/ // probando Else

	// Ejercicio 1 BIS
	/* Ejercicio 1bis:
	/con if
	pedir a una persona que fue de vaciones , 
	la distancia que viajo y el tiempo que tardo, para calcular la velocidad
	e informar:
	60 km/hr = muy lento 
	hata 80km/h= lento 
	hasta 100= buen ritmo
	hasta 120= ahi de la ley 
	mas = eso no se hace */

	/*let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia = parseInt( document.getElementById("txtIdEdad").value );
	tiempo = parseInt( prompt("De cuantas horas fue su recorrido") );

	velocidad = distancia/tiempo;

	if (velocidad <= 60) {
		mensaje = velocidad + "KM/H Muy lento";
	}else{
		if(velocidad <= 80){
			mensaje = velocidad + "KM/H Lento";
		}else{
			if(velocidad <= 100){
				mensaje = velocidad + "KM/H Buen ritmo";
			}else{
				if(velocidad <= 120){
					mensaje = velocidad + "KM/H Ahi de la ley";
				}else{
					if(velocidad > 120){
						mensaje = velocidad + "KM/H Eso nose hace";
					}
				}
			}
		}
	}

	alert(mensaje);*/

	//EJERCICIO 1 BIS BIS
	/* Ejercicio 1 bis bis:
	con if
	ingresar el nombre y los datos requeridos para calcular el IMC , 
	e informar a la persona si es:
	Bajo peso <18.5
	Peso normal 18,5-24.9
	Preobesidad 25-26.9
	Obesidad I 27-29.9
	Obesidad II 30-34.9
	Obesidad III >40 */

	let nombre;
	let peso;
	let altura;
	let imc;
	let mensaje;

	nombre = document.getElementById("txtIdEdad").value;
	peso = parseInt( prompt("Ingrese su peso") );
	altura = parseFloat( prompt("Ingrese su altura (Metro)") );

	imc = (peso/Math.pow(altura, 2)).toFixed(1);

	if(imc < 18.5){
		mensaje = nombre + ": " + imc + " Bajo peso";
	}else{
		if(imc >= 18.5 && imc <= 24.9){
			mensaje = nombre + ": " + imc + " Peso normal";
		}else{
			if(imc >= 25 && imc <= 26.9){
				mensaje = nombre + ": " + imc + " Preobesidad";
			}else{
				if(imc >= 27 && imc <= 29.9){
					mensaje = nombre + ": " + imc + " Obesidad 1";
				}else{
					if(imc >= 30 && imc <= 34.9){
						mensaje = nombre + ": " + imc + " Obesidad 2";
					}else{
						if(imc >= 35){
							mensaje = nombre + ": " + imc + " Obesidad 3";
						}
					}
				}
			}
		}
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN