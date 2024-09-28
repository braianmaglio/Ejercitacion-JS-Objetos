
    // Ejercicio 9: Crear un array de autos y utilizar el método forEach para imprimir la descripción de cada auto.
    const autos = [
        { marca: 'Ford', modelo: 'Mustang', color: 'Rojo', año: 2021 },
        { marca: 'Toyota', modelo: 'Corolla', color: 'Azul', año: 2018 },
        { marca: 'Honda', modelo: 'Civic', color: 'Negro', año: 2020 }
    ];
    
    autos.forEach(auto => {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Color: ${auto.color}, Año: ${auto.año}`);
    });
