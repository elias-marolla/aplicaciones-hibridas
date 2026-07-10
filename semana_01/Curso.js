class Curso{
    nombre ="";
    carrera ="";
    estudiantes = [];

    constructor(nombre, carrera,estudiantes=[]){
        this.nombre = nombre;
        this.carrera = carrera;
        this.estudiantes = estudiantes;
    }
    retornarDatos(){
        return `Nombre: ${this.nombre} | Carrera ${this.carrera} | Inscriptos: ${this.estudiantes.length}`;
    }
    agregarEstudiantes(estudiante){
        this.estudiantes.push(estudiante);
    }
    obtenerEstudiante(){
        return this.estudiantes;
    }
}

module.exports = Curso;