/*1. Nahuel Espinosa Fuentes	
    Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let mensaje;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioUno").value;
    productoTres = document.getElementById("txtIdPrecioUno").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    mensaje = "Precio sin IVA:$" + (productoUno + productoDos + productoTres);

    alert(mensaje);

}
function Promedio () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let promedio
    let mensaje;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioUno").value;
    productoTres = document.getElementById("txtIdPrecioUno").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    promedio = (productoUno + productoDos + productoTres) / 3;

    mensaje = "Promedio de los productos:$" + promedio;

    alert(mensaje);
}
function PrecioFinal () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let iva;
    let precioFinal;
    let mensaje;
    let operacion;

    iva = 21;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioUno").value;
    productoTres = document.getElementById("txtIdPrecioUno").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    precioFinal = productoUno + productoDos + productoTres;
    operacion = precioFinal + (precioFinal * iva/100)

    mensaje = "Precio Final con IVA:$" + operacion;

    alert(mensaje);
}