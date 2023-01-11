import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';

import connect from '../../../libs/database';
import '../../../lib/passport';
// import Profiles from '../../../models/Profiles';
import createToken from '../../../utils/create-token';

export default async function CallBack(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect(process.env.NEXT_PUBLIC_URL + '/');
    }
    setCookie('token', info.token, {
      req,
      res,
    });

    const userGoogleIdToken = createToken(user.googleId);
    setCookie('userGoogleId', userGoogleIdToken, {
      req,
      res,
    });

    // const currentUserUrl = user.defaultUserName;
    res.redirect(process.env.NEXT_PUBLIC_URL + `/`);
  })(req, res);
}
