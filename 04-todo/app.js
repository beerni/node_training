// const argv = require('yargs').argv;

const yargs = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');



let comando = yargs.argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(yargs.argv.descripcion);
        break;
    case 'listar':
        porHacer.listar();
        break;
    case 'actualizar':
        porHacer.actualizar(yargs.argv.descripcion, yargs.argv.completado)
        break;
}