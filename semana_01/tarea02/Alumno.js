const fs = require('fs/promises');

class Alumno{
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    path = "data/materias.json";


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
    async agregarMateria(materia){
        const id = crypto.randomUUID();
        this.materias.push({
            id: id,
            materia: materia
        });
        await this.guardarMateria();
    }
    async guardarMateria(){
        const data = JSON.stringify(this.materias, null, 2);
        await fs.writeFile(this.path, data);
    }
    mostrarMaterias(){
        return this.materias;
    }
    retornaEdad(){
        return this.edad;
    }
}
module.exports = Alumno