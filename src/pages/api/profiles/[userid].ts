import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Profiles from '../../../models/Profiles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const {
    query: { userid },
    method,
  } = req;

  if (!userid) {
    return res.status(401).json({
      success: false,
      message: 'There is no username',
      loading: false,
    });
  }

  switch (method) {
    case 'GET':
      {
        const getProfile = await Profiles.findOne({
          'userInfo.userId': userid,
        });
        res.status(200).json({
          success: true,
          message: 'Found all Profiles of user',
          loading: false,
          data: getProfile,
        });
      }
      break;
    default:
  }
}
