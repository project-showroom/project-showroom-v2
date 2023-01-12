import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import passport from '../../../libs/passport-google-auth';
import createToken from '../../../utils/create-token';

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
  next: any,
) {
  await connect();

  passport.authenticate('google', (err: any, user: any, info: any) => {
    if (err || !user) {
      return res.redirect(process.env.NEXT_PUBLIC_URL + '/');
    }

    setCookie('token', info.token);

    const userGoogleIdToken = createToken(user.googleId);
    setCookie('userGoogleId', userGoogleIdToken);

    res.redirect(process.env.NEXT_PUBLIC_URL + `/`);
  })(req, res, next);
}
