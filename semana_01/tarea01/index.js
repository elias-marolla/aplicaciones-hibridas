const Alumno = require('./Alumno.js');

const a1 = new Alumno('Elias', 'Marolla', 27, 'Desarrollo Web');
a1.agregarMateria('Proyecto final');
a1.agregarMateria('Aplicaciones Hibridas');
a1.agregarMateria('Clientes Web');

const alumno = a1.obtenerDatos();
a1.modificarEdad(29);
const edad = a1.retornaEdad();
const carrera = a1.obtenerCarrera();
const materias = a1.mostrarMaterias();

console.log(`El alumno ${alumno} de ${edad} años, esta cursando la carrera ${carrera}. Actualmente cursa las materias: `);
console.table(materias);