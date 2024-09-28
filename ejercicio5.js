
    // Ejercicio 5: Crear una función constructora para objetos auto.
    function Auto(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    console.log(Auto);
    Auto.prototype.mostrarDescripcion = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}`);
    };
    
    const autoNuevo = new Auto('Toyota', 'Corolla', 2022, 'Rojo');
    autoNuevo.mostrarDescripcion();
