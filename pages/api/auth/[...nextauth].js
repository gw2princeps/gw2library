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
        params: {
          scope: "gw2auth:verified",
          redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback/gw2auth`,
        },
      },
      idToken: false,

      clientId: process.env.GW2AUTH_CLIENT_ID,
      clientSecret: process.env.GW2AUTH_SECRET,
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      console.log(token);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export default NextAuth(authOptions);
