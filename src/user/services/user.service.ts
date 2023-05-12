import User, { Iuser } from '../models/user.model';

export async function getAllUsers(): Promise<Iuser[]> {
  const users = await User.find();
  return users;
}

export async function getUserById(id: string): Promise<Iuser | null> {
  const user = await User.findById(id);
  return user;
}

export async function createUser(userData: Iuser): Promise<Iuser> {
  const newuser = await User.create(userData);
  return newuser;
}

export async function updateUser(id: string, userData: Iuser): Promise<Iuser | null> {
  const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
  return updatedUser;
}

export async function deleteUser(id: string): Promise<void> {
  await User.findByIdAndDelete(id);
}