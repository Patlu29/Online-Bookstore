import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt";

const UserRepo = AppDataSource.getRepository(User);

export const AllAuthors = async () => {
  const users = await UserRepo.find({where:{role: 'author'}});
  return users;
};

export const AuthRegister = async (
  userName: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = UserRepo.create({
    userName,
    email,
    password: hashedPassword,
    role: "author",
  });
  await UserRepo.save(user);
};

