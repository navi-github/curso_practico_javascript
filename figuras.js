// Este es el código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del Cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado (lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + " cm cuadrados");
console.groupEnd();

// Este es el código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulos miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm y " + baseTriangulo + " cm");
// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del Triángulo mide: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + " cm cuadrados");

console.groupEnd();

// Código del círculo
// console.group("Círculos");

// // Radio
// const radioCirculo = 4;

// // Diámetro
// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;
}

// // PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI); 

// // Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// // Area Círculo
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio ** 2) * PI;
}


// console.log("El radio del círculo es: " + radioCirculo + " cm");
// console.log("El diámetro del círculo es: " + diametroCirculo + " cm");
// console.log("El perímetro del círculo mide: " + perimetroCirculo + " cm");
// console.log("El área del círculo es: " + areaCirculo + " cm");

console.groupEnd();