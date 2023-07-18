import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.type';

const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);


export const User = model<IUser, UserModel>('users', UserSchema);
