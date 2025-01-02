import { db } from "@pill/db"; // your drizzle instance
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  user: {
    modelName: "users",
  },
  session: {
    modelName: "sessions",
  },
  verification: {
    modelName: "verifications",
  },
  account: {
    modelName: "accounts",
  },
});
