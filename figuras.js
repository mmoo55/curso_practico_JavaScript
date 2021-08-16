// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


// Triángulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const valueIzq = Number(input1.value);

  const input2 = document.getElementById("InputTriangulo2");
  const valueDer = Number(input2.value);

  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);


  const perimetro = perimetroTriangulo(valueIzq, valueDer, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);

  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

// Círculo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

// Ejercicio calcular la altura de un triángulo isósceles
function calcularAlturaTriangulo() {
  const inputIzq = document.getElementById("InputTrianguloIzq");
  const valueIzq = Number(inputIzq.value);

  const inputDer = document.getElementById("InputTrianguloDer");
  const valueDer = Number(inputDer.value);

  const inputBase = document.getElementById("InputTrianguloBaseIs");
  const valueBase = Number(inputBase.value);

  if((valueIzq === valueDer) && (valueIzq != valueBase) && (valueDer != valueBase)) {
    const altura = Math.sqrt((Math.pow(valueIzq, 2) - ((Math.pow(valueBase, 2) / 4))));

    alert(altura);
  } else {
    alert("No es un triángulo isósceles");
  }
}