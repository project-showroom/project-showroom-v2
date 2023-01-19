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
    case 'DELETE':
      {
        const deleteProject = await Projects.findOneAndDelete({
          _id: cardid,
        });
        res.status(200).json({
          success: true,
          message: 'Deleted project',
          loading: false,
          data: deleteProject,
        });
      }
      break;

    default:
  }
}
