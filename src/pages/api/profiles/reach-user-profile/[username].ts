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

  console.log(username);

  switch (method) {
    case 'GET':
      {
        const getSearchProfile = await Profiles.findOne({
          userName: username,
        });
        console.log(getSearchProfile, 'getSearchProfile');
        res.status(200).json({
          success: true,
          message: 'Found all Profiles of user',
          loading: false,
          data: getSearchProfile,
        });
      }
      break;
    default:
  }
}
