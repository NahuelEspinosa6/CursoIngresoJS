/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // Formula ("x"°F - 32) * 5/9 = "Resultado °C"
    let fahrenheit;
    let centigrados;
    let mensaje;

    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) * 5/9

    mensaje = fahrenheit + "°F son " + centigrados + "°C";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	// Formula ("X"°C * 9/5) + 32 = "Resultado °F"
    let fahrenheit;
    let centigrados;
    let mensaje;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados);

    fahrenheit = (centigrados * 9/5) + 32;

    mensaje = centigrados + "°C son " + fahrenheit + "°F";

    alert(mensaje);
}
