
    // Ejercicio 6: Utilizar un bucle for...in para iterar sobre las propiedades de un objeto auto.
    
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022
};

for (let propiedad in auto) {
    console.log(`${propiedad}: ${auto[propiedad]}`);
}