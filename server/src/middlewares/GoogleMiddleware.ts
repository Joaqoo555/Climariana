import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';
import {config} from "dotenv"
import { Request } from 'express';
import db from '../db';
config()

// const emails =["joaquincarrera2018@gmail.com"]

passport.use("auth-google",new GoogleStrategy({
    clientID: "388377632199-1aa4cr4im79m4p26dr6khns687qc4751.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: `http://localhost:5000/auth/google`,
    passReqToCallback:true,
    scope:[
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
  ],
  },
  async (_request:Request, _accessToken: any, _refreshToken: any, profile: any, done: VerifyCallback) => {
    // Aquí puedes consumir la información de perfil de Google
    // La información del perfil se encuentra en el objeto "profile"
    try {
      // Busca al usuario en la base de datos
      const [user, _created] = await db.User.findOrCreate({
        where: { 
          email: profile.email 
        },
        defaults: {
          fullname: profile.displayName,
          email: profile.emails[0].value
        }
      });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  
  }
));

passport.serializeUser((user, done)=> {
    done(null, user)
})

passport.deserializeUser((user:any, done)=> {

    done(null, user)
})

