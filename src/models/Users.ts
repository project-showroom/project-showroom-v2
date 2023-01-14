import { Schema, Document, model, models } from 'mongoose';

export interface IUser extends Document {
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Users || model<IUser>('Users', UserSchema);
