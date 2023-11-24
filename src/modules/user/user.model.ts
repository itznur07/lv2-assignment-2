import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: [true, 'User id is required!'],
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    trim: true,
    unique: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'firstname is required!'],
      maxlength: [8, 'Name should be 8 charectar'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'lastname is required!'],
      trim: true,
    },
  },
  age: { type: Number, required: [true, 'Age is required!'] },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    maxlength: 20,
    trim: true,
  },
  isActive: {
    type: Boolean,
    required: [true, 'IsActive is required!'],
    trim: true,
  },
  hobbies: { type: [String], required: [true, 'Hobbies is required!'] },
  address: {
    street: { type: String, required: [true, 'Street is required!'] },
    city: { type: String, required: [true, 'City is required!'] },
    country: {
      type: String,
      required: [true, 'Conuntry is required!'],
      trim: true,
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: [true, 'Product Name is required!'],
      },
      price: { type: Number, required: [true, 'Price is required!'] },
      quantity: { type: Number, required: true },
    },
  ],
});

export const UserModel = model<User>('Users', userSchema);
