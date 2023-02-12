/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*let cantLamp;
    let precio = 35;
    let descuento;
    let operacion;
    let precioFinal;
    let ingBrutos;
    let marca;
    let aumento;

    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    
    // A
    if(cantLamp >= 6){
        descuento = 50;
    }

    //B
    if(cantLamp == 5 && marca == "ArgentinaLuz"){
        descuento = 40;
    }else{
        if(cantLamp == 5 && marca != "ArgentinaLuz"){
            descuento = 30;
        }
    }

    //C
    if(cantLamp == 4 && marca == "ArgentinaLuz" || cantLamp == 4 && marca == "FelipeLamparas"){
        descuento = 25;
    }else{
        if(cantLamp == 4 && marca != "ArgentinaLuz" || cantLamp == 4 && marca != "FelipeLamparas"){
            descuento = 20;
        }
    }

    //D
    if(cantLamp == 3 && marca == "ArgentinaLuz"){
        descuento = 15;
    }else{
        if(cantLamp == 3 && marca == "FelipeLamparas"){
            descuento = 10;
        }else{
            if(cantLamp == 3 && marca != "ArgentinaLuz" || cantLamp == 3 && marca != "FelipeLamparas"){
                descuento = 5;
            }
        }
    }

    operacion = cantLamp * precio;
    precioFinal = operacion - (operacion * descuento/100);
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
     
    // E
    if(precioFinal >= 120){
        ingBrutos = 10;
        aumento = precioFinal * ingBrutos/100;
        aumentoFinal = precioFinal + aumento;
        mensaje = "IIBB Usted pago $"+ aumentoFinal + ", siendo $" + aumento + " el impuesto que se pagó"
        alert(mensaje);
    }*/

    // TP 4 Ferrete iluminancion solo SWITCH (las marcas), IF(cantidad)

    /*let cantLamp;
    let precio = 35;
    let descuento;
    let operacion;
    let precioFinal;
    let ingBrutos;
    let marca;
    let aumento;

    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (marca) {
        case "ArgentinaLuz":
            descuento = 0;
            if (cantLamp >= 6) {
                descuento = 50;
            } else{
                if (cantLamp == 5) {
                    descuento = 40;
                }else{
                    if (cantLamp == 4) {
                        descuento = 25;
                    }else{
                        if (cantLamp == 3) {
                            descuento = 15;
                        }
                    }
                } 
            } 
            break;
        case "FelipeLamparas":
            descuento = 0;
            if (cantLamp >= 6) {
                descuento = 50;
            }else{
                if(cantLamp == 4){
                    descuento = 25;
                }else{
                    if(cantLamp == 3){
                        descuento = 10;
                    }
                }
            }
            break;
        default:
            descuento = 0;
            if (cantLamp >= 6) {
                descuento = 50;
            }else{
                if(cantLamp == 5){
                    descuento = 30;
                }else{
                    if(cantLamp == 4){
                        descuento = 20;
                    }else{
                        if(cantLamp = 3){
                            descuento = 5;
                        }
                    }
                }
            } 
            break;
    }    

    operacion = cantLamp * precio;
    precioFinal = operacion - (operacion * descuento/100);
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal >= 120){
        ingBrutos = 10;
        aumento = precioFinal * ingBrutos/100;
        aumentoFinal = precioFinal + aumento;
        mensaje = "IIBB Usted pago $"+ aumentoFinal + ", siendo $" + aumento + " el impuesto que se pagó"
        alert(mensaje);
    }*/

    // TP 4 Ferrete iluminancion Con switch(cantidad) y if (marca)

    /*let cantLamp;
    let precio = 35;
    let descuento;
    let operacion;
    let precioFinal;
    let ingBrutos;
    let marca;
    let aumento;

    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantLamp) {
        case 6:
            descuento = 50;
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            }else{
                descuento = 30;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 25;
            }else{
                descuento = 20;
            }
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            }else{
                if(marca == "FelipeLamparas"){
                    descuento = 10;
                }else{
                    descuento = 5;
                }
            }
            break;
        default:
            descuento = 0;
    }

    operacion = cantLamp * precio;
    precioFinal = operacion - (operacion * descuento/100);
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal >= 120){
        ingBrutos = 10;
        aumento = precioFinal * ingBrutos/100;
        aumentoFinal = precioFinal + aumento;
        mensaje = "IIBB Usted pago $"+ aumentoFinal + ", siendo $" + aumento + " el impuesto que se pagó"
        alert(mensaje);
    }*/

    let cantLamp;
    let precio = 35;
    let descuento;
    let operacion;
    let precioFinal;
    let ingBrutos;
    let marca;
    let aumento;

    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantLamp){ 
        case 5:
            switch (marca){
                case "Argentinaluz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
            }
            break;
        case 4:
            switch (marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
            break;
        case 2:
        case 1:
            descuento = 0;
            break;
        default:
            descuento = 50;
            break;
    }

    operacion = cantLamp * precio;
    precioFinal = operacion - (operacion * descuento/100);
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal >= 120){
        ingBrutos = 10;
        aumento = precioFinal * ingBrutos/100;
        aumentoFinal = precioFinal + aumento;
        mensaje = "IIBB Usted pago $"+ aumentoFinal + ", siendo $" + aumento + " el impuesto que se pagó"
        alert(mensaje);
    }

}
