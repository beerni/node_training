setTimeout(() => {
    console.log('Hello world');
}, 1000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    return console.log('Usuario', usuario);
});