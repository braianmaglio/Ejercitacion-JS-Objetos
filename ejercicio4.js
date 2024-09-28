
    // Ejercicio 4: Añadir un nuevo auto al array utilizando el método push().
    const autos = [
        { marca: 'Ford', modelo: 'Mustang', anio: 2018, color: 'Rojo' },
        { marca: 'Toyota', modelo: 'Corolla', anio: 2020, color: 'Azul' },
    ];
    console.log(autos);
    const nuevoAuto = { marca: 'Honda', modelo: 'Civic', anio: 2021, color: 'Negro' };
    
    autos.push(nuevoAuto);
    console.log(autos);