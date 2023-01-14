import jwt from 'jsonwebtoken';

export default function convertTokenId(token: any) {
  const verifyToken: any = jwt.decode(token);
  if (!verifyToken) return '';

  return verifyToken.id;
}
