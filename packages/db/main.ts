import { drizzle } from "drizzle-orm/libsql";
import { authToken, dbURL } from "./src/constants";

export { accounts, sessions, users, verifications } from "./src/schema";

export const db = drizzle({
  connection: {
    url: dbURL,
    authToken
  },
  casing: "camelCase",
});
