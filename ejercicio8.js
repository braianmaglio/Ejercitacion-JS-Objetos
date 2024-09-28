
    // Ejercicio 8: Añadir un método a la función constructora Auto para mostrar la descripción del auto.
    function Auto(marca, modelo, color, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.descripcion = function() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.año}`;
        }
    }
    const autoNuevo = new Auto('Toyota', 'Corolla', 'Rojo', 2000);
    console.log(autoNuevo.descripcion());