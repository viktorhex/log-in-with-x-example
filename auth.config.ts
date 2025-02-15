import TwitterProvider from "next-auth/providers/twitter"

const X_CLIENT_ID = process.env.X_CLIENT_ID;
const X_CLIENT_SECRET = process.env.X_CLIENT_SECRET;

if (!X_CLIENT_ID || !X_CLIENT_SECRET) {
  throw 'missing env vars';
}
export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: X_CLIENT_ID,
      clientSecret: X_CLIENT_SECRET
    }),
  ],
}
