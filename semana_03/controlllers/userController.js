const User = require('../model/User.js');
const model = new User;

const addUser = async(req,res)=>{
    try {
        const user = req.body;
        const {name, email, password} = user;
        if(!name || !email || !password){
            res.status(400).json({ msg: 'Error al cargar nuevo usuario, faltan datos'});
            return;
        }
        const id = await model.addUser(user);
        res.status(200).json({ msg: 'se guardo el usuario correctamente.', id});
    } catch (error) {
        console.log('Hay un error', error);
        res.status(500).json({msg: 'Error al cargar el usurio'})
    }
}

const getUsers =  async (req, res)=>{
    try {
        const list = await model.getUsers();
        res.json(list);
    } catch (error) {
        res.status(500).json({ msg:'Error al cargar los productos' })    
    }
}

module.exports = { getUsers, addUser };
