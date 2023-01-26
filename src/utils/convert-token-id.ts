import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

import { MyToken } from '../types/api-types/token-types';

export default function convertTokenId() {
  const token = getCookie('token') as string;
  const verifyToken = jwt.decode(token);
  if (!verifyToken) return;

  const { id } = verifyToken as MyToken;

  return id;
}
