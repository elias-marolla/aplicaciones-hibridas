import userModel from "../model/userModel.js";

const postUser= async (req, res) =>{
try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(404).json({ msg:"Faltan completar campos." });
        return ;
    }
    const newUser = new userModel({name, email, password});
    const data = await newUser.save();

    
    res.status(201).json({ msg:"El ususario se genero correctamente.", data });
} catch (error) {
    console.error(error);
    res.status(500).json({ msg:"Error al cargar la peticion" });
}
}

const getUsers = async (req, res)=>{
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg:"Error al cargar la peticion" });
    }
}

export {getUsers, postUser};