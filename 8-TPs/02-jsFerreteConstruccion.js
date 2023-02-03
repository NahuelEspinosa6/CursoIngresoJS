/*2. Nahuel Espinosa Fuentes	
    Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // A    Perimetro rectangular (largo * 2) + (ancho * 2)
    let largo;
    let ancho;
    let operacion;
    let alambre;
    let mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(largo);
    
    operacion = largo * 2 + ancho * 2;
    alambre = operacion * 3;
    mensaje = "Cantidad de alambre a comprar: " + alambre;

    alert(mensaje);

}
function Circulo () 
{
	// B    Perimetro del Circulo "2 * pi * Radio "
    let radio;
    let operacion;
    let alambre;
    let mensaje

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    operacion = 2 * 3.14 * radio;
    alambre = (operacion * 2) * 3;

    mensaje = "Cantidad de alambre a comprar: " + alambre;

    alert(mensaje);
}
function Materiales () 
{
	// C    Area de un rectangulo "largo * ancho"
    //      "1 mts" area por 3 de cal y 1mts por 2 de cemento

    let largo;
    let ancho;
    let operacion;
    let cal;
    let cemento;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    operacion = largo * ancho;
    cal = operacion * 3;
    cemento = operacion * 2;

    mensaje = "Necesitas: " + cal + " de cal y " + cemento + " de cemento";

    alert(mensaje);

}