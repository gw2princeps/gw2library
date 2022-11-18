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

      authorization: {
        url: "https://gw2auth.com/oauth2/authorize",
        params: {
          scope: "gw2auth:verified",
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

      clientId: process.env.GW2AUTH_CLIENT_ID,
      clientSecret: process.env.GW2AUTH_SECRET,
    },
  ],
};
export default NextAuth(authOptions);
