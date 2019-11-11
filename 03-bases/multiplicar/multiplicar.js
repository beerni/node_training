const fs = require('fs');


let crearArchivo = async(base) => {

    let data = '';

    if (!Number(base)) {
        throw new Error(base + " no es un número");
    }
    for (let i = 0; i < 11; i++) {
        data += "Multiplicando " + base + " x " + i + "= " + 2 * i + '\n';
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

module.exports = {
    crearArchivo
}