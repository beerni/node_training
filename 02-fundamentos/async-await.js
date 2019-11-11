// let getNombre = async() => {

//     throw new Error('No existe nombre ');
//     return 'Bernat'
// };



getNombre().then(nombre => console.log(nombre)).catch(err => console.log("error", err));