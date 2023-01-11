import type { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../libs/database';

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await connect();

  res.status(200).json({ name: 'John Doe' });
}
