class Alumno{
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];


    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;   
        this.materias = materias;
    }
    
    obtenerCarrera(){
        return this.carrera;
    }
    obtenerDatos(){
        return `${this.nombre} ${this.apellido}`
    }
    modificarEdad(edad = 0){
        this.edad = edad
    }
    agregarMateria(materia){
        this.materias.push(materia);
    }
    
    mostrarMaterias(){
        return this.materias;
    }
    retornaEdad(){
        return this.edad;
    }
}
module.exports = Alumno