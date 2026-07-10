const fs = require('fs/promises');
const path = './products.json'

class ProductManager {
    products= []
    
    constructor( products=[] ){
        this.products = products;
    }

    async loadProducts(path){
        try{
            const data = await fs.readFile(path);
            if(data){
                this.products = JSON.parce(data);
            }else{
                this.products = [];
            }
        }catch(error){
            console.error(error);
        }
        
    }

    async addProduct(product){
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            product: product
        });
        
    };

    async getProducts(){
        return this.getProducts;
    }

    async getProductsById(id){
        
    }
}

exports.modudle = ProductManager;