let empleados = [{
        id: 1,
        nombre: 'Bernat'
    }, {
        id: 2,
        nombre: 'pepe'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
];

let getEmpleadoById = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback("No existe el empleado con id " + id);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id);

    if (!salarioBD) {
        callback("No se encontró el salario del usuario " + empleado.nombre);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario
        })
    }
}

// getEmpleadoById(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(empleado)
// });

getSalario(empleados[2], (err, salarioEmpleado) => {
    if (err) {
        return console.log(err);
    } else
        return console.log(salarioEmpleado);
})