let deadpool = {
    nombre: "Dwayme",
    appellido: 'Wade',
    poder: "Basket",
    getNombre: function() {
        return `${this.nombre} ${this.appellido} tiene el poder ${this.poder}`;
    }
}

let { nombre: alias, appellido, poder } = deadpool;

console.log(alias, appellido, poder);