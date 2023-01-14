import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Projects from '../../../models/Projects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();
  const { body, method } = req;
  body.createdAt = Date.now();

  switch (method) {
    case 'POST':
      {
        const newProject = new Projects(body);
        await newProject.save();
      }
      break;
    case 'GET':
      {
        const allProjects = await Projects.find();
        res.status(200).json({
          success: true,
          data: allProjects,
          message: 'Found all projects',
          loading: false,
        });
      }
      break;
    default:
  }
}
