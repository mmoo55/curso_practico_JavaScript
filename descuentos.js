const precioOriginal = 120;
const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento / 100);

// console.log({
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100);

    return precioConDescuento;
}

function onClickButtonPriceDescount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDescount = document.getElementById("InputDescount");
    const descountValue = inputDescount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento; // innerText se comporta como un atributo para asignar un texto y sea mostrado en html
}


// Reto: funciones más inteligentes

const cupones = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];

function onClickButtonPriceCupon(){
    const inputPr = document.getElementById("InputPr");
    const priceValue = inputPr.value;

    const inputCupon = document.getElementById("InputCupon");
    const nombreCupon = inputCupon.value;

    const resultCupon = document.getElementById("ResultCupon");

    let descuento;
    let precioConDescuento;

    switch(true){
        case nombreCupon === cupones[0]:
            descuento = 15;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultCupon.innerText = `Cupón valido, el precio con descuento es de ${precioConDescuento}$`;
            break;
        case nombreCupon === cupones[1]:
            descuento = 30;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultCupon.innerText = `Cupón valido, el precio con descuento es de ${precioConDescuento}$`;
            break;   
        case nombreCupon === cupones[2]:
            descuento = 35;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultCupon.innerText = `Cupón valido, el precio con descuento es de ${precioConDescuento}$`;
            break;
        default:
            resultCupon.innerText = "El cupon ingresado no es valido, por favor vuelva a intentarlo"
    }

}