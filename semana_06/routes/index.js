import userRouter from "./userRouter.js";

const routerAPI = (app) =>{

    app.use('/users', userRouter)
}


export default routerAPI;