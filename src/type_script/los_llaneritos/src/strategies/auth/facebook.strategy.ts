import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-facebook';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID_FACEBOOK,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALL_BACK_URL,
      scope: 'email',
      profileFields: ['emails', 'name'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: any): Promise<any> {
    const payload = {
      token: accessToken,
      user: profile._json,
    };

    done(null, payload);
  }
}
