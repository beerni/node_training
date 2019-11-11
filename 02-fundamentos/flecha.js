// function suma(a, b) {
//     return a + b;
// }

// console.log(suma(10, 20));

// let sumar = (a, b) => a + b;


let saludar = () => 'Hola';

console.log(saludar());
// console.log(sumar(10, 20));

let deadpool = {
    nombre: "Dwayme",
    appellido: 'Wade',
    poder: "Basket",
    getNombre: () => { return `${this.nombre} ${this.appellido} tiene el poder ${this.poder}`; }

}

console.log(deadpool.getNombre());