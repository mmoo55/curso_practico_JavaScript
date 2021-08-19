function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000
// ];

// const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// let mediana;

// if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemnto1,
//         elemento2
//     ]);

//     mediana = promedioElemento1y2;

// } else {
//     mediana = lista1[mitadLista1];
// }


function calcularMediana(lista) {

    // const listaOrdenada = (lista) => {
    //     lista.sort(function(a, b){return a - b});

    //     return lista;
    // }

    // const listaOrdenada = lista.sort(function(a, b) {
    //     return a - b;
    // });

    // function lowest() {
    //     return [].slice.call(arguments).sort(function(a,b){
    //         return a - b;
    //     });
    // }

    // const listaOrdenada = lowest(lista);

    lista.sort((a, b) => a - b);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}