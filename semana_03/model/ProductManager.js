const fs = require('fs/promises');

class ProductManager{
    products = [];
    path = './data/products.json';

    constructor(products=[]){
        this.products = products;
    }


    async saveJSON(){
        const data = JSON.stringify(this.products, null, 2);
        try {
            await fs.writeFile(this.path, data);
            console.log('Se guardaron correctamente los datos.')
        } catch (error) {
            console.error('No se guardaron los datos')
        }
    }

    async readJSON(){ 
            const data = await fs.readFile(this.path);
            return JSON.parse( data );
    }

    async addProduct(product){
       this.products = await this.readJSON();
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
        this.saveJSON();
        return id;
    }

    async getProducts(){
        const products = await this.readJSON();
        return products;
    }

    async getProductsById(id){
        const products = await this.readJSON();
        const product = products.find(item => item.id == id);
        return product 
    }

    async deleteById(id){
        this.products = await this.readJSON();
        const index = this.products.findIndex(product => product.id == id);

        if(index == -1){
            return 'error';
        }else{
            this.products.splice(index, 1);
            await this.saveJSON();
            return `se elimino el producto con el id: ${id}`;
        }
    }

    async updateProductById(id, product){
        const newProduct = {
            id: id,
            ...product
        }
        this.products = await this.readJSON();
        const index = this.products.findIndex( product => product.id == id);
        if(index == -1){
            return `No se encontro un producto con el id: ${id}`
        }else{
            this.products.splice(index, 1, newProduct);
            await this.saveJSON();
            return `Se modifico correctamente el producto con id: ${id}`
        }
    }

}

module.exports = ProductManager