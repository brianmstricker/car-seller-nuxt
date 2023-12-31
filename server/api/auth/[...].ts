import { NuxtAuthHandler } from "#auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
// @ts-ignore
import clientPromise from "~/server/client";

export default NuxtAuthHandler({
 pages: {
  signIn: "/login",
 },
 providers: [
  // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
  GoogleProvider.default({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
 ],
 //@ts-ignore
 adapter: MongoDBAdapter(clientPromise),
});
