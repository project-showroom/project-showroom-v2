import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';

import connect from '../../../libs/database';

import '../../../lib/passport';

export default async function google(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res);
}
