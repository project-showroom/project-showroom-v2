import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Profiles from '../../../models/Profiles';
import { MyToken } from '../../../types/api-types/token-types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();
  const { body, method } = req;

  const token = req.cookies.token as string;
  const verifyToken = jwt.decode(token);
  const { id } = verifyToken as MyToken;

  switch (method) {
    case 'GET':
      {
        const getProfiles = await Profiles.findOne({
          // 'userInfo.defaultUserName': body.data.userInfo.defaultUserName,
          'userInfo.userId': id,
        });
        res.status(200).json({
          success: true,
          message: 'Found all Profiles',
          loading: false,
          data: getProfiles,
        });
      }
      break;
    case 'PUT':
      {
        const updateProfile = await Profiles.findOneAndUpdate(
          {
            'userInfo.defaultUserName': body.data.userInfo.defaultUserName,
          },
          { ...body.data },
        );

        if (!updateProfile) {
          body.createdAt = Date.now();

          const newProfile = new Profiles({
            ...body.data,
            userName: body.data.userInfo.defaultUserName,
          });
          await newProfile.save();
        }

        res.status(200).json({
          success: true,
          data: updateProfile,
          message: 'Update user profile',
          loading: false,
        });
      }
      break;
    default:
  }
}
