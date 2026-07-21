import dotenv  from "dotenv";
import JsonWebToken from "jsonwebtoken";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const validarToken = (req, res, next) => {
    const token = req.headers.authorization;
    
    if(!token){
       return res.status(401).json({ msg: "No se paso el JWT" });
    }
    const jwt = token.split(' ')[1];
    JsonWebToken.verify(jwt,SECRET_KEY,(error, decoded)=>{
        if(error){
            return res.status(403).json({ msg: "Token Invalido" });
        }
        console.log(decoded)
        req.body.userAuthID = decoded.id

    })
    next();
}

export { validarToken }