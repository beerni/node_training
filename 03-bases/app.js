const { crearArchivo } = require('./multiplicar/multiplicar.js');

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            desc: 'La base para la tabla',
            alias: 'b'
        }
    })
    .argv;

console.log(argv);
// let base = 'abc';
// crearArchivo(base).then(archivo => console.log(`Archivo creado`)).catch(err => console.log(err));