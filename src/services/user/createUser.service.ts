import User from "../../entities/User";
import { AppError } from "../../erros/AppError";
import { hash } from "bcryptjs";
import {
  IUserRequest,
  IUserResponseCreate,
} from "../../interfaces/user.interface";
import UserRepository from "../../repositories/user.repository";


const createUserServive = async ({
  name,
  celphone,
  email,
  password, 
  seller, buyer
}: IUserRequest): Promise<IUserResponseCreate> => {
  if (!name || !email || !password || !celphone) {
    throw new AppError("Illegal arguments", 400);
  }
  
  const emailAlreadyExisty = await UserRepository.findByEmail(email);

  if (emailAlreadyExisty) {
    throw new AppError("Email já cadastrado.", 409);
  }

  const user = new User();
  user.name = name;
  user.celphone = celphone;
  user.email = email;
  user.password = await hash(password, 10);
  user.seller = seller || false;
  user.buyer = buyer || true;

  const newUser: IUserResponseCreate = await UserRepository.create(user);

  return newUser;
};

export default createUserServive;