const express = require('express');
const dotenv = require('dotenv');
const app = express();
const product = require('./model/ProductManager');
const ProductManager = require('./model/ProductManager');
dotenv.config();
const port = process.env.PORT;
app.use(express.json());


const model = new ProductManager();

app.get('/', (req, res)=>{
    res.send('Soy un API');
})

app.get('/products', async (req,res)=>{
    try {
        const list = await model.getProducts();
        res.json(list);
    } catch (error) {
        res.status(500).json({ msg:'Error al cargar los productos' })    
    }
    
})

app.get('/products/:id', async (req,res)=>{
    try {    
        const { id } = req.params;
        const product = await model.getProductsById(id);
        if(!product){
            res.status(404).json({msg: 'producto no encontrado'});
            return 
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({msg: 'Error al cargar el producto'})
    }
})

app.post('/products', async(req,res)=>{
    try {
        const body = req.body;
        const {name, description, price, stock } = body;
        if(!name || !description || !price || !stock){
            res.status(400).json({ msg: 'Error al cargar nuevo producto, faltan datos'});
            return;
        }
        const id = await model.addProduct(body);
        res.status(200).json({ msg: 'se guardo el producto correctamente.', id});
    } catch (error) {
        res.status(500).json({msg: 'Error al cargar el producto'})
    }
})

app.delete('/products/:id', async (req,res)=>{
    try {    
        const { id } = req.params;
        const data = await model.deleteById(id);
        if(data == 'error'){
           res.status(404).json({msg: 'producto no encontrado'});
            return  
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({msg: 'Error al eliminar el producto'})
    }
})

app.put('/products/:id', async (req,res)=>{
    try {    
        const { id } = req.params;
        const body = req.body;
        const {name, description, price, stock } = body;
        if(!name || !description || !price || !stock){
            res.status(400).json({ msg: 'Error al cargar nuevo producto, faltan datos'});
            return;
        }
        const data = await model.updateProductById(id, body);
        if(data == 'error'){
           res.status(404).json({msg: 'producto no encontrado'});
            return  
        }
        
        res.status(200).json({ msg: 'se actualizo el producto correctamente.', data});
    } catch (error) {
        res.status(500).json({msg: 'Error al eliminar el producto'})
    }
})


app.listen(port, ()=>{
    console.log(`Servidor Web escuchando en el puerto ${port}`);
})
