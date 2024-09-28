
    // Ejercicio 10: Utilizar un bucle for...of para iterar sobre un array de autos e imprimir sus descripciones.
    const autos = [
        { marca: 'Ford', modelo: 'Mustang', color: 'Rojo', año: 2021 },
        { marca: 'Toyota', modelo: 'Corolla', color: 'Azul', año: 2018 },
        { marca: 'Honda', modelo: 'Civic', color: 'Negro', año: 2020 }
    ];
    
    for (const auto of autos) {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}`);
    }

