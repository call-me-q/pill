import { drizzle } from "drizzle-orm/node-postgres";
import { dbURL } from "./src/constants";

export { accounts, sessions, users, verifications } from "./src/schema";

export const db = drizzle({
  connection: dbURL,
  casing: "camelCase",
});
