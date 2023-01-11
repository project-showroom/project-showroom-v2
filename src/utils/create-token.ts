import { sign } from 'jsonwebtoken';

export default function createToken(id: any) {
  return sign({ id }, process.env.NODE_ENV, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
