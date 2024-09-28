// Ejercicio 2: Añadir un método al objeto auto que devuelva una cadena con la descripción del auto.
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022,
    descripcion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}