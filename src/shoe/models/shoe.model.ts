import { Schema, model, Document } from 'mongoose';

export interface IShoe extends Document {
  name: string;
  brand: string;
  price: number;
}

const ShoeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model<IShoe>('Shoe', ShoeSchema);
