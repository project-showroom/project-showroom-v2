import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../../libs/database';
import Profiles from '../../../../models/Profiles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const {
    query: { username },
    method,
  } = req;

  switch (method) {
    case 'GET':
      {
        const getSearchProfile = await Profiles.findOne({
          'userInfo.defaultUserName': username,
        });

        res.status(200).json({
          success: true,
          message: 'Found Profile of user',
          loading: false,
          data: getSearchProfile,
        });
      }
      break;
    default:
  }
}
