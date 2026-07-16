const express = require('express');
const ProductManager = require('../model/ProductManager');
const model = new ProductManager;

const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const list = await model.getProducts();
        res.json(list);
    } catch (error) {
        res.status(500).json({ msg:'Error al cargar los productos' })    
    }
    
})

router.get('/:id', async (req,res)=>{
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

router.post('/', async(req,res)=>{
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

router.delete('/:id', async (req,res)=>{
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

router.put('/:id', async (req,res)=>{
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

module.exports = router;