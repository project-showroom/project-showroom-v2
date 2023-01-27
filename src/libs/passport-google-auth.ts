import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';

import Users from '../models/Users';
import { IUserType } from '../types/api-types';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.NEXT_PUBLIC_URL + '/api/google/callback',
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
      try {
        const userExist = await Users.findOne({ googleId: profile.id });
        if (userExist) {
          const token: string = jwt.sign(
            {
              id: userExist._id,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string },
          );
          userExist.tokens = token;
          await userExist.save();
          done(null, userExist, { message: 'Auth successful', token });
        } else {
          var generateId = (Math.floor(Math.random() * 10000) + 10000)
            .toString()
            .substring(1);
          const newUser = new Users({
            googleId: profile.id,
            email: profile?.emails?.values().next().value.value,
            defaultUserName:
              profile.displayName.replaceAll(' ', '-').toLowerCase() +
              generateId,
            emailVerified: profile.emails?.values().next().value.verified,
            displayName: profile.displayName,
            firstName: profile?.name?.givenName,
            lastName: profile?.name?.familyName,
            image: profile?.photos?.values().next().value.value,
          });
          await newUser.save();
          const token: string = jwt.sign(
            {
              id: newUser._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string },
          );
          newUser.tokens = token;
          await newUser.save();
          done(null, newUser, { message: 'Auth successful', token });
        }
      } catch (err) {
        console.error(err, 'err');
        done(null, false, { message: 'Internal server error' });
      }
    },
  ),
);

passport.serializeUser(
  (req: NextApiRequest, user: IUserType, done: VerifyCallback) => {
    done(undefined, user);
  },
);

passport.deserializeUser((id, done) => {
  Users.findById(id, (err: Error, { ...user }: IUserType) => done(err, user));
});

export default passport;
