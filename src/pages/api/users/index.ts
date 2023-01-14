import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Users from '../../../models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const getUser = await Users.find({});
  res.status(200).json({
    success: true,
    data: getUser,
    message: 'user found',
    loading: false,
  });
}
