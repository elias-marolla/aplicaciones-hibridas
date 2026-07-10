const fs = require('fs');
const path = "README.md";
const text = '#semana 01 - Node Basico';

const fn = (err, data) => {
    if(err){
        console.error('Ocurrio un error');
    }else {
        console.log(data.toString());
    }
}
fs.readFile(path, fn);

fs.writeFile(path, text, function(err){
    if(err){
        console.error('Ocurrio un error');
    }else{
        console.log('Escritura correcta');
    }
})