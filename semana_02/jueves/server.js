const ProductManager = require('../martes/ProductManager.js');
const express = require('express');
const chalk = require('chalk');
const model = new ProductManager();

const port = 3000;

const server = express();


console.log(chalk.bgGreen('API REST'));

server.listen(port, ()=>{
    console.log(chalk.blue(`servidor en el puerto ${port}`));
});

server.get('/', (req, res)=>{
    res.send('Hola desde express!!!');
});

server.get('/products', async(req, res)=>{
    const list = await model.getProducts();
    console.table(list);
    res.json(list);
});

server.get('/products/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await model.getProductsById(id);
    console.table(data);
    res.json(data);
});