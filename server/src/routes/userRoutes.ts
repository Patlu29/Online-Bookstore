import { Router } from "express";
import { GetAllUsers, Login, Register } from "../controllers/UserController";

export const userRouter = Router()

userRouter.get('/allusers', GetAllUsers)
userRouter.post('/register', Register)
userRouter.post('/login', Login)