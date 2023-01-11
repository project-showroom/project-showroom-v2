import { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
  googleId: string;
  defaultUserName: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
  tokens: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  googleId: {
    type: String,
    required: true,
  },
  defaultUserName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailVerified: {
    type: Boolean,
    required: true,
  },
  displayName: {
    type: String,
    // required: true,
    // unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  tokens: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>('User', UserSchema);
export default User;