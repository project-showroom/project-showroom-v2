import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Projects from '../../../models/Projects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const {
    query: { username },
    method,
  } = req;

  if (!username) {
    return res.status(401).json({
      success: false,
      message: 'There is no username',
      loading: false,
    });
  }

  switch (method) {
    case 'GET':
      {
        const getProjects = await Projects.find({
          'userInfo.defaultUserName': username,
        }).sort({ createdAt: -1 });
        // TODO: Sort could be dynamic

        if (!getProjects) {
          res.status(404).json({
            success: false,
            message: 'No projects found',
            loading: false,
          });
          break;
        }

        res.status(200).json({
          success: true,
          message: 'Found all projects of user',
          loading: false,
          data: getProjects,
        });
      }
      break;
    default:
  }
}
