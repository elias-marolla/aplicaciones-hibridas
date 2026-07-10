const Curso = require('./Curso.js');
let mensaje = "Hola Mundo";
console.log(mensaje)

const c1 = new Curso('Aplicaciones Hibridas', 'DW');
c1.agregarEstudiantes({nombre: 'Elias', email:'elias@mail.com'});
c1.agregarEstudiantes({nombre: 'Raul', email:'raul@mail.com'});
c1.agregarEstudiantes({nombre: 'Tomas', email:'tomas@mail.com'});

const datos = c1.retornarDatos();
const lista = c1.obtenerEstudiante();
console.log(datos);
console.table(lista);