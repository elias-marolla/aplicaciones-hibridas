const fs = require('fs/promises');
const path = "README.md";
const text = '#semana 01 - Node Basico + promises';

fs.writeFile(path, text).then(()=>{
    console.log('Escritura correcta')
})

fs.readFile(path).then((data)=>{
    console.log(data.toString());
})
