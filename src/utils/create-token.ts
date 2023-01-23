import { sign } from 'jsonwebtoken';

export default function createToken(id: string | undefined) {
  return sign({ id }, process.env.NODE_ENV, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
