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

let getEmpleadoById = async(id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error("No existe el empleado con id " + id);
    } else {
        return empleadoDB;
    }
}

let getSalarioByEmpleado = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error('No existe el salatio del empleado ' + empleado.nombre);
    } else {
        return { empleado: empleado.nombre, salario: salarioDB.salario };
    }
};

// getEmpleadoById(3).then(empleado => {
//     return getSalarioByEmpleado(empleado);
// }).then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log(err);
// })


let getInformacion = async(id) => {

    let empleado = await getEmpleadoById(id);
    let resp = await getSalarioByEmpleado(empleado);
    return `El empleado ${empleado.nombre} tiene un salario de ${resp.salario}`;
    // console.log('Get empleado', empleado);
    // console.log('Res ', resp);
}

getInformacion(3)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));