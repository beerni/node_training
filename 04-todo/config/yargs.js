 const argv = require('yargs');

 let descripcionObj = {
     descripcion: {
         demand: true,
         alias: 'd',
         desc: 'Descripción de la tarea por hacer'
     }
 }

 argv
     .command('crear', 'crear un elemento por hacer',
         descripcionObj
     )
     .command('actualizar', 'Actualizar el estado', {
         descripcion: {
             demand: true,
             alias: 'd',
             desc: 'Descripción de la tarea por hacer'
         },
         completado: {
             default: true,
             alias: 'c'
         }
     })
     .help()
     .argv;

 module.exports = {
     argv
 }