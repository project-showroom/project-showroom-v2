import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Profiles from '../../../models/Profiles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();
  const { body, method } = req;

  switch (method) {
    case 'GET':
      {
        const getProfiles = await Profiles.find({
          'userInfo.defaultUserName': body.data.userInfo.defaultUserName,
        });
        res.status(200).json({
          success: true,
          message: 'Found all Profiles of user',
          loading: false,
          data: getProfiles,
        });
      }
      break;
    case 'PUT':
      {
        const userProfile = await Profiles.findOneAndUpdate(
          {
            'userInfo.defaultUserName': body.data.userInfo.defaultUserName,
          },
          body.data,
        );

        if (!userProfile) {
          body.createdAt = Date.now();

          const newProfile = new Profiles({
            userName: body.data.userInfo.defaultUserName,
            myDetails: body.data.myDetails,
            giveNameToButton: body.data.giveNameToButton,
            addLinkToYourDetails: body.data.addLinkToYourDetails,
            profileTitle: body.data.profileTitle,
            userInfo: {
              defaultUserName: body.data.userInfo.defaultUserName,
              userEmail: body.data.userInfo.userEmail,
              userId: body.data.userInfo.userId,
              displayName: body.data.userInfo.displayName,
            },
          });
          //   const newProfile = new Profiles(body.data);
          await newProfile.save();
        }
        res.status(200).json({
          success: true,
          data: userProfile,
          message: 'Found user profile',
          loading: false,
        });
      }
      break;
    default:
  }
}
