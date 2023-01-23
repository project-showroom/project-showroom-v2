import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import passport from '../../../libs/passport-google-auth';

export default async function index(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res);
}
