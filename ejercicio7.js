
    // Ejercicio 7: Crear un array de objetos utilizando una función constructora.
    
    // Definimos la función constructora Auto
    function Auto(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    const auto1 = new Auto('Toyota', 'Corolla', 'Rojo',);
    const auto2 = new Auto('Honda', 'Civic', 'Negro',);
    const autos = [auto1, auto2];

    console.log(autos);