import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import Projects from '../../../models/Projects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();
  const { body, method } = req;

  switch (method) {
    case 'POST':
      {
        body.createdAt = Date.now();
        const newProject = new Projects(body);
        await newProject.save();
        res.status(200).json({
          success: true,
          data: newProject,
          message: 'Created new project',
          loading: false,
        });
      }
      break;
    case 'GET':
      {
        const allProjects = await Projects.find({});
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
