const productRouter = require('./productRouter.js');
const userRouter = require('./userRouter.js');

const routerApi = (app)=>{
    app.use('/users', userRouter);
    app.use('/products', productRouter);
}

module.exports = routerApi;