import { Schema, model, Document } from 'mongoose';

export interface Iuser extends Document {
  firstName: string;
  email: string;
  phoneNumber: string;
  shippingAddress:string;
  creditCard:string;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  creditCard: {
    type: String,
    required: true,
  },
});

export default model<Iuser>('User', UserSchema);
