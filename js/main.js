/****************************   Variables   ****************************/

const cft = 0.6644;
const cuotasPermitidas = 12;
const precioSinIva = Number( prompt('¿Cual es el valor sin IVA del producto que desea financiar?') );
const precioProducto = sumarIva(precioSinIva);
const cantidadDeCuotas = Number( prompt('¿En cuantas cuotas lo desea abonar?') );
const valorCuota = cuota(precioProducto, cantidadDeCuotas);

/****************************   Bucles   ****************************/

for (let i = 1; i <= 12; i++) {
    const resultado = i * (cft / 12) * 100 
    if(resultado)
    console.log(`El interes en ${i} pagos es de ${resultado}%`);
}

/****************************   Funciones   ****************************/

function sumarIva(precioSinIva) {
    let resultadoSumaIva = precioSinIva * 1.21;
    return resultadoSumaIva;
}

function cuota(precioProducto, cantidadDeCuotas) {
    let resultadoCuota = ( precioProducto + precioProducto * cantidadDeCuotas * (cft / cuotasPermitidas) ) / cantidadDeCuotas
    return resultadoCuota;
}

function valorTotalFinanciado(valorCuota, cantidadDeCuotas) {
    let precioTotal = (valorCuota * cantidadDeCuotas)
    if(cantidadDeCuotas <= 12) {
        alert(`El valor de la cuota a abonar sera de $${valorCuota}`)
        alert(`El valor total del producto financiado será de $${precioTotal}`);
    } else {
        alert(`El máximo de cuotas posibles son ${cuotasPermitidas}`)
    }
}



valorTotalFinanciado(valorCuota, cantidadDeCuotas)