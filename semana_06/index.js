import express from "express";
import dotenv from "dotenv";
import routerAPI from "./routes/index.js";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

mongoose.connect(URI_DB);
const db = mongoose.connection;
db.on('error',()=>{ console.error(error)});
db.once('open',()=>{console.info('conexion correcta con la db')})

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('<h1>Hola</h1>');
});

routerAPI(app);

app.listen(PORT, ()=>{
    console.log(`escuchando en el puerto ${PORT}`)
})

