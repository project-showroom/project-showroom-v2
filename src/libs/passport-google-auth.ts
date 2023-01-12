import jwt from 'jsonwebtoken';
import NativeError from 'mongoose';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import Users, { IUser } from '../models/Users';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.NEXT_PUBLIC_URL + '/api/google/callback',
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        const userExist = await Users.findOne({ googleId: profile.id });
        if (userExist) {
          const token: any = jwt.sign(
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
            email: profile.emails[0].value,
            defaultUserName:
              profile.displayName.replaceAll(' ', '-').toLowerCase() +
              generateId,
            emailVerified: profile.emails[0].verified,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
          });
          await newUser.save();
          const token: any = jwt.sign(
            {
              id: newUser._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET as any,
            { expiresIn: process.env.JWT_EXPIRES_IN as string },
          );
          newUser.tokens = token;
          await newUser.save();
          done(null, newUser, { message: 'Auth successful', token });
        }
      } catch (err) {
        console.error(err, 'err');
        done(err, false, { message: 'Internal server error' });
      }
    },
  ),
);

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err: NativeError, { ...user }: IUser) => done(err, user));
});

export default passport;
