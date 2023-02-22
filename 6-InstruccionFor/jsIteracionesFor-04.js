function mostrar()
{ /* al presionar el botón repetir hasta que utilizamos 'BREAK'. */
	let repeticion;
	let i;

	for(i = 0; i < 1000; i++){
		repeticion = prompt("Para cortar ingrese 'break'");
		if (repeticion == "break") {
			break;
		}
	}

}//FIN DE LA FUNCIÓN