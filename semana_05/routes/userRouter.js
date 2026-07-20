import express from "express";
import { getUsers, postUser, getUserById, deleteUserById, updateUserById } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.post('/',postUser);
userRouter.delete('/:id', deleteUserById);
userRouter.put('/:id', updateUserById);

export default userRouter;
