import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const salt = 10;

const auth = async (req, res)=>{
    try {
        const {email, password} = req.body;  
         if( !email || !password){
            res.status(404).json({ msg:"Faltan completar campos." });
            return ;
        }

        const userData = await userModel.findOne({email});
        if(!userData){
            res.status(404).json({ msg: "El mail no existe" });
            return;
        }

        const validatedPassword = await bcrypt.compare(password, userData.password);
        if(!validatedPassword){
            res.status(404).json({ msg: "Contraseña invalida" });
            return;
        }

        const payload = {
            id: userData._id,
            email: userData.email
        }

        const jwt = jsonwebtoken.sign(payload, SECRET_KEY, { expiresIn: '2h' });
        res.json({ msg: "Las credenciales son correctas", jwt })

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg:"Error en el servidor" });
    }
    
}


const postUser= async (req, res) =>{
try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(404).json({ msg:"Faltan completar campos." });
        return ;
    }
    const userData = await userModel.findOne({email});

    if(userData){
        res.status(400).json({ msg: "El mail ya fue registrado" });
        return;
    }

    const hash = await bcrypt.hash(password, salt);

    const newUser = new userModel({name, email, password:hash});
    const data = await newUser.save();

    
    res.status(201).json({ msg:"El ususario se genero correctamente.", data });
} catch (error) {
    console.error(error);
    res.status(500).json({ msg:"Error al cargar la peticion" });
}
}

const getUsers = async (req, res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json({ msg: " usuarios encontrados", data :users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg:"Error al cargar la peticion" });
    }
}

const getUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        if( user ){
            res.status(200).json({ msg: "Se encontro un usuario", data : user})
        }else{
            res.status(404).json({ msg: "No se encontro un usuario con ese id", data: {} })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor", data:{} });
    }
   
}

const deleteUserById = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);
        if( user ){
            res.status(200).json({ msg: "Se elimino el usuario correctamete", data: user});
        } else{
            res.status(404).json({ msg: "No se encotro el usario.", data: {} })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor", data:{} });
    }
}

const updateUserById = async(req, res) =>{
    try {
        const { id } = req.params;
        const { name, password, userAuthID } = req.body;
        
        if(id != userAuthID){
            return res.status(403).json({  msg: "El usuario no tiene permitido modificar" })
        }
        if(!name||!password){
            return res.status(401).json({ msg: "Faltan campos obligatorios" })
        }
        const hash = await bcrypt.hash(password, salt);

        const user = await userModel.findByIdAndUpdate(id, {name,password:hash});
        res.status(202).json({ msg: "El usuario se actualizo correctamente" })
        } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor", data: {} })
    }
}

export {getUsers, postUser, getUserById, deleteUserById, updateUserById, auth};