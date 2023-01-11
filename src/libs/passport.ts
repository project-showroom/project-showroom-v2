import { sign } from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import Users from '../models/Users';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.NEXT_PUBLIC_URL + '/api/google/callback',
      passReqToCallback: true,
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        const userExist = await Users.findOne({ googleId: profile.id });

        if (userExist) {
          const token = sign(
            {
              id: userExist._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET as string,
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
            accessToken,
          });
          await newUser.save();
          const token = sign(
            {
              id: newUser._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET as any,
          );
          newUser.tokens = token;
          await newUser.save();
          done(null, newUser, { message: 'Auth successful', token });
        }
      } catch (err) {
        console.error(err);
        done(err, false, { message: 'Internal server error' });
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err: string, user: string) => done(err, user));
});
