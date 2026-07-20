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
        const { name, password } = req.body;
        if(!name||!password){
            res.status(401).json({ msg: "Faltan campos obligatorios" })
        }

        const user = await userModel.findByIdAndUpdate(id, {name,password});
        res.status(202).json({ msg: "El usuario se actualizo correctamente" })
        } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor", data: {} })
    }
}

export {getUsers, postUser, getUserById, deleteUserById, updateUserById};