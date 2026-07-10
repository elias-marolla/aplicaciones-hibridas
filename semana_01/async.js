const fs = require('fs/promises');
const path = "README.md";
const text = '#semana 01 - Node Basico + async';

const lectura = async (path) => {
    const data = await fs.readFile(path);
    console.log('Lectura del archivo');
    console.log(data.toString());

    await fs.writeFile(path, text);
    console.log('Escritura correcta')
}

lectura(path);