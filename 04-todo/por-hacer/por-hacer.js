const fs = require('fs');


let currentData = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }

    let datosActuales = getFile();


    JSON.parse(datosActuales).forEach(dato => {
        currentData.push(dato);
    });

    currentData.push(porHacer);

    saveDb();
    return porHacer;
}

const getFile = () => {
    return fs.readFileSync('/Users/bernatmir/Desktop/node/04-todo/db/data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
    });
}

const saveDb = () => {
    fs.writeFileSync('/Users/bernatmir/Desktop/node/04-todo/db/data.json', JSON.stringify(currentData), err => {
        if (err) {
            throw new Error('Error guardando')
        }
    });
}

const listar = () => {
    JSON.parse(getFile()).forEach(tarea => {
        console.log(`La tarea ${tarea.descripcion} esta en estado ${tarea.completado}`);
    })
}

const actualizar = (descripcionTarea, completado) => {

    let data = JSON.parse(getFile());
    for (let tarea of data) {
        if (tarea.descripcion == descripcionTarea) {
            tarea.completado = Boolean(completado);
        }
    }
    currentData = data;
    saveDb();
}

module.exports = {
    crear,
    listar,
    actualizar
}