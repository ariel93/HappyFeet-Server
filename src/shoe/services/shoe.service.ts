import Shoe, { IShoe } from '../models/shoe.model';

export async function getAllShoes(): Promise<IShoe[]> {
  const shoes = await Shoe.find();
  return shoes;
}

export async function getShoeById(id: string): Promise<IShoe | null> {
  const shoe = await Shoe.findById(id);
  return shoe;
}

export async function createShoe(shoeData: IShoe): Promise<IShoe> {
  const newShoe = await Shoe.create(shoeData);
  return newShoe;
}

export async function updateShoe(id: string, shoeData: IShoe): Promise<IShoe | null> {
  const updatedShoe = await Shoe.findByIdAndUpdate(id, shoeData, { new: true });
  return updatedShoe;
}

export async function deleteShoe(id: string): Promise<void> {
  await Shoe.findByIdAndDelete(id);
}