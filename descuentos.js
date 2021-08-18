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