const Alumno = require("./Alumno.js");

const a1 = new Alumno("Elias", "Marolla", 27, "Desarrollo Web");

const alumno = a1.obtenerDatos();
a1.modificarEdad(29);
const edad = a1.retornaEdad();
const carrera = a1.obtenerCarrera();
const materias = a1.mostrarMaterias();

console.log(
  `El alumno ${alumno} de ${edad} años, esta cursando la carrera ${carrera}. Actualmente cursa las materias: `,
);


async function guardarMaterias() {
  await a1.agregarMateria("Proyecto final");
  await a1.agregarMateria("Aplicaciones Hibridas");
  await a1.agregarMateria("Clientes Web");
};

guardarMaterias(),then(()=>{
    console.log('guardado')
})
console.table(materias);