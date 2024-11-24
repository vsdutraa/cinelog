import { connectMongoDB } from "@/lib/mongodb";
import UserModel from "@/models/user-model";
import bcrypt from "bcrypt";
import { RegisterInput } from "@/lib/zod/auth-form";
import { NotFoundError } from "@/services/errors";

export async function getUsers() {
  await connectMongoDB();
  const users = await UserModel.find();

  return users.map((user) => ({
    id: user._id,
    email: user.email,
    username: user.username,
  }));
}
export async function createUser(userData: RegisterInput) {
  await connectMongoDB();

  const existingEmail = await UserModel.findOne({
    email: userData.email,
  }).select("_id");
  if (existingEmail) {
    throw new Error("Email is already in use");
  }

  const existingUsername = await UserModel.findOne({
    username: userData.username,
  }).select("_id");
  if (existingUsername) {
    throw new Error("Username is already in use");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await UserModel.create({
    email: userData.email,
    username: userData.username,
    password: hashedPassword,
  });

  return {
    id: newUser._id,
    email: newUser.email,
    username: newUser.username,
  };
}

export async function getUserByUsername(username: string) {
  await connectMongoDB();
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new NotFoundError();
  }
  return {
    id: user._id,
    username: user.username,
    email: user.email,
  };
}

export async function getUserById(id: string) {
  await connectMongoDB();
  const user = await UserModel.findById(id);
  if (!user) {
    throw new NotFoundError();
  }
  return {
    id: user._id,
    username: user.username,
    email: user.email,
  };
}
