import express from "express";
import { getUsers, postUser, getUserById, deleteUserById, updateUserById, auth } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/auth', auth);
userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.post('/',postUser);
userRouter.delete('/:id', deleteUserById);
userRouter.put('/:id', updateUserById);

export default userRouter;
