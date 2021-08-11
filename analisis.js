// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista)
 {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calculadora de Mediana General
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Calcular Mediana General
const salariosColombia = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralColombia = medianaSalarios(salariosColombiaSorted);

// Mediana del top 10%
const spliceStart = (salariosColombiaSorted.length * 90) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;

const salariosColombiaTop10 = salariosColombiaSorted.splice(spliceStart, spliceCount);

const medianaColombiaTop10 = medianaSalarios(salariosColombiaTop10);

console.log({
    medianaGeneralColombia,
    medianaColombiaTop10,
});

// Reto: Ir a Clase 22