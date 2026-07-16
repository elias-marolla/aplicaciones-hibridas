const express = require('express');
const dotenv = require('dotenv');
const routerAPI = require('./routes');
const app = express();

dotenv.config();
const port = process.env.PORT;
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Soy un API');
})

routerAPI(app);


app.listen(port, ()=>{
    console.log(`Servidor Web escuchando en el puerto ${port}`);
})
