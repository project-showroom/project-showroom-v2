import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Users from '../../../models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const {
    query: { userId },
  } = req;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: 'unauthorized cause no user userId',
      loading: false,
    });
  }

  const getUser = await Users.findById({ _id: userId });
  res.status(200).json({
    success: true,
    data: getUser,
    message: 'user found',
    loading: false,
  });
}
