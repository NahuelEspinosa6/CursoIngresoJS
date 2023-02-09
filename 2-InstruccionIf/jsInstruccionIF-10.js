function mostrar()
{
	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 */
	let nota;
	let max = 9;
	let min = 1;
	let mensaje;

	nota = Math.floor(Math.random() * 10 + 1); // del 1 al 10

	if(nota >= 9){
		mensaje = nota + " Excelente";
	}else{
		if(nota > 3){
			mensaje = nota + " Aprobo";
		}else{
			mensaje = nota + " Vamos la proxima se puede";
		}
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN