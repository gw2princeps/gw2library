import NextAuth from "next-auth";

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
          const token = context.tokens.access_token;

          const profile = JSON.parse(atob(token.split(".")[1]));
          return { id: profile.sub, profile };
        },
      },

      clientId: process.env.GW2AUTH_CLIENT_ID,
      clientSecret: process.env.GW2AUTH_SECRET,

      profile(profile, tokens) {
        console.log(`Profile: ${profile}`);
        console.log(`Tokens: ${tokens}`);
        return profile;
      },
    },
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) console.log(`Signin-User: ${user}`);
      if (account) console.log(`Signin-Account: ${account}`);
      if (profile) console.log(`Signin-Profile: ${profile}`);
      if (email) console.log(`Signin-Email: ${email}`);
      if (credentials) console.log(`Signin-Credentials: ${credentials}`);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (session) console.log(`S-Session: ${JSON.stringify(session)}`);
      if (user) console.log(`S-User: ${JSON.stringify(user)}`);
      if (token) console.log(`S-Token: ${JSON.stringify(token)}`);

      const profile = token.profile;
      const { name } = profile["gw2:tokens"][profile.sub];
      return { ...session, user: { ...user, sub: profile.sub, name } };
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (token) console.log(`JWT-Token: ${JSON.stringify(token)}`);
      if (user) console.log(`JWT-User  : ${JSON.stringify(user)}`);
      if (account) console.log(`JWT-Account: ${JSON.stringify(account)}`);
      if (profile) console.log(`JWT-Profile: ${JSON.stringify(profile)}`);
      if (isNewUser) console.log(`JWT-NewUser: ${JSON.stringify(isNewUser)}`);

      return { ...token, profile: { ...user.profile } };
    },
  },
  debug: true,
};
export default NextAuth(authOptions);
