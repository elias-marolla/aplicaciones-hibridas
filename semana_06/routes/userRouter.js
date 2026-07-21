import express from "express";
import { getUsers, postUser, getUserById, deleteUserById, updateUserById, auth } from "../controllers/userController.js";
import { validarToken } from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post('/auth', auth);
userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.post('/',postUser);
userRouter.delete('/:id', validarToken, deleteUserById);
userRouter.put('/:id', validarToken, updateUserById);

export default userRouter;
