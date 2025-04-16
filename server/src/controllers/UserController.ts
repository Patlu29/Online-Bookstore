import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import * as dotenv from "dotenv";
import { AllUsers, UserRegister } from "../services/Users";

dotenv.config();

const userRepository = AppDataSource.getRepository(User);

export const GetAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await AllUsers()
      res.status(200).send({ data: allUsers });
    } catch (error) {
      res.json( error instanceof Error ? error.message :"Failed to fetch data" );
    }
  };

export const Register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userName, email, password, role } = req.body;
        const registeredUser = UserRegister(userName, email, password)
        res.status(200).json({message: "User registered successfully",data: registeredUser})
    }catch(e) {
        res.status(500).json({e})
    }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
  
    const user = await userRepository.findOneBy({ email });
  
    if (!user) {
      res.status(401).json({ message: "Invalid user" });
      return;
    }
  
    const isPasswordMatch = await bcrypt.compare(password, user.password);
  
    if (!isPasswordMatch) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.SECRET_KEY as string,
      { expiresIn: "1h" }
    );
  
    res.json({ message: "Login successful", token, role: user.role });
  };
  



