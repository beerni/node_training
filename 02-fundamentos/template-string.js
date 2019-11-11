let nombre = 'Deadpool';
let real = "Dwayne Wade";

console.log(`${nombre}, ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de: ${getNombre()}`);