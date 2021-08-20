// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// let sumaLista1 = 0;

// for(let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(         // A reduce se le envía una función
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


// Media geométrica
// Ejemplo 1
function calcularMediaGeometrica(lista) {
    const multiplicarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado * nuevoElemento;
        }
    );

    if (multiplicarLista >= 0) {
        const mediaGeometrica = Math.pow(multiplicarLista, 1 / lista.length);

        return mediaGeometrica
    } else {
        return "Los valores deben ser positivos"
    }
}


// Ejemplo 2: supongamos los resultados de una empresa. La empresa ha generado un 20% de rentabilidad el primer año, un 15% el segundo año, un 33% el tercer año y un 25% el cuarto año.
// Si las rentabilidades fueran negativas, no se pondrían números negativos. Si la rentabilidad es del -20%, el número a multiplicar sería 0,80. Si la rentabilidad es del -5%, el número a multiplicar sería 0,95.
// 20% = 1.20
// -20% = 0.80

function calcularMediaGeometricaEmpresa(lista2) {
    const listaPorcentajes = [];

    for (i=0; i < lista2.length; i++) {
        listaPorcentajes[i] = (lista2[i] / 100) + 1;
    }

    const multiplicarLista = listaPorcentajes.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado * nuevoElemento;
        }
    );

    const mediaGeometrica = Math.pow(multiplicarLista, 1 / listaPorcentajes.length);
    
    return mediaGeometrica;
}