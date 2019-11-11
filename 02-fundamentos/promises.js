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

let getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject("No existe el empleado con id " + id);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalarioByEmpleado = (empleado => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject('No existe el salatio del empleado ' + empleado.nombre);
        } else {
            resolve({ empleado: empleado.nombre, salario: salarioDB.salario });
        }
    })
});

getEmpleadoById(3).then(empleado => {
    return getSalarioByEmpleado(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
})