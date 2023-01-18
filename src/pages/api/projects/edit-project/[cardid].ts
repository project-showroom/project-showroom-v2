import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../../libs/database';
import Projects from '../../../../models/Projects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  const {
    query: { cardid },
    method,
  } = req;

  if (!cardid) {
    return res.status(401).json({
      success: false,
      message: 'There is no username',
      loading: false,
    });
  }

  switch (method) {
    case 'GET':
      {
        const getProject = await Projects.find({
          _id: cardid,
        });
        res.status(200).json({
          success: true,
          message: 'Found all projects of user',
          loading: false,
          data: getProject,
        });
      }
      break;
    case 'PUT':
      {
        const updateProject = await Projects.findOneAndUpdate(
          {
            _id: cardid,
          },
          { ...req.body.data },
        );
        res.status(200).json({
          success: true,
          message: 'Found all projects of user',
          loading: false,
          data: updateProject,
        });
      }
      break;
    default:
  }
}
