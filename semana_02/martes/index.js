const http = require('http');

const ProductManager = require('./ProductManager.js');
const model = new ProductManager();

// model.getProducts().then(products =>{
//     console.table(products);
// });

const port = 3000;
const server = http.createServer((request, response)=>{
    const url = request.url;
    const method = request.method;

    console.log(url, method);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hola desde node</h1>');
});

server.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})

// console.log('Inicio del Script');
// model.updateProductById('2b2db8a3-e373-464a-bcb2-55bfc190d1ae', {
//     "name": "Web-Cam",
//     "description": "La mejor definicion.",
//     "price": 9000,
//     "stock": 15
// }).then( res =>{
//     console.log(res);
// });

// model.addProduct({
//     name: 'Mouse',
//     description: 'Componente para mover en la pantalla donde uno hace click',
//     price: 12.000,
//     stock: 30
// })
// model.addProduct({
//     name: 'Teclado',
//     description: 'Teclado con letras',
//     price: 22.000,
//     stock: 15
// })
// model.addProduct({
//     name: 'Web Cam',
//     description: 'Para que te vean',
//     price: 7000,
//     stock: 20
// })