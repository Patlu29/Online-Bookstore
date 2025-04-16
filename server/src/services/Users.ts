import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt";

const UserRepo = AppDataSource.getRepository(User);

export const AllUsers = async () => {
  const users = await UserRepo.find();
  return users;
};

export const UserRegister = async (
  userName: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = UserRepo.create({
    userName,
    email,
    password: hashedPassword,
    role: "user",
  });
  await UserRepo.save(user);
};

