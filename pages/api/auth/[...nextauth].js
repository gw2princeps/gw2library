import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const config = {
  runtime: "nodejs",
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    {
      id: "gw2auth",
      name: "Gw2Auth",
      type: "oauth",
      version: "2.0",
      wellKnown: "https://gw2auth.com/.well-known/oauth-authorization-server",

      authorization: {
        url: "https://gw2auth.com/oauth2/authorize",
        params: {
          scope: "gw2:account gw2auth:verified",
          redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback/gw2auth`,
        },
      },

      token: {
        url: "https://gw2auth.com/oauth2/token",
        params: {
          redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback/gw2auth`,
          grant_type: "authorization_code",
        },
      },
      idToken: false,
      issuer: "https://gw2auth.com",

      userinfo: {
        request: (context) => {
          // we have to build our own profile since gw2auth does not support an userinfo endpoint
          const token = context.tokens.access_token;

          // the payload of the access_token contains useful information
          // https://github.com/gw2auth/oauth2-server/wiki#reading-the-gw2-api-subtokens-out-of-the-access-token
          const profile = JSON.parse(atob(token.split(".")[1]));
          const accId = Object.keys(profile)[0];
          return { id: accId, profile };
        },
      },

      clientId: process.env.GW2AUTH_CLIENT_ID,
      clientSecret: process.env.GW2AUTH_SECRET,

      profile(profile) {
        // just return the profile
        return profile;
      },
    },
    process.env.NODE_ENV === "development" &&
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: "Credentials",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "admin only",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          if (
            credentials.username === "admin" &&
            credentials.password === "admin"
          ) {
            return {
              id: 1,
              profile: {
                sub: "admin",
                "gw2:tokens": {
                  admin: {
                    name: "Admin",
                  },
                },
              },
            };
          }
          return null;
        },
      }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // we could deny the signIn here, for example for banning users.
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // called last. we can attach things that are passed to the client here
      if (!token) {
        return session;
      }

      const profile = token.profile;
      const accId = Object.keys(profile["gw2:tokens"])[0];
      const { name } = profile["gw2:tokens"][accId];
      return { ...session, user: { ...user, sub: accId, name } };
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // this is called after profile
      // user contains the object returned by the profile function
      if (!user) return token;

      // we strip the id, since the id is the same as the sub and therefore already included in the profile
      return { ...token, profile: user.profile };
    },
  },
  debug: false,
};
export default NextAuth(authOptions);
