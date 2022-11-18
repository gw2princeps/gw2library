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
        request: () => {},
      },

      clientId: process.env.GW2AUTH_CLIENT_ID,
      clientSecret: process.env.GW2AUTH_SECRET,

      profile(profile) {
        console.log(`Profile: ${profile}`);
        return { id: "somethingID" };
      },
    },
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        `User: ${user} ${account} ${profile} ${email} ${credentials}`
      );
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log(`Redirect: ${url} ${baseUrl}`);
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log(`Session: ${session} ${user} ${token}`);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(`JWT: ${token} ${user} ${account} ${profile} ${isNewUser}`);
      return token;
    },
  },
};
export default NextAuth(authOptions);
