import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../../libs/database';
import passport from '../../../libs/passport-google-auth';
import { IUserType } from '../../../types/api-types';
import createToken from '../../../utils/create-token';

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connect();

  passport.authenticate('google', (err: string, user: IUserType, info: any) => {
    console.log(info, 'info');
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

    res.redirect(process.env.NEXT_PUBLIC_URL + `/`);
  })(req, res);
}
