import { drizzle } from "drizzle-orm/libsql";
import { authToken, dbURL } from "./src/constants.js";

export {
  accounts,
  sessions,
  users,
  verifications,
} from "./src/schema/index.mjs";

export const db = drizzle({
  connection: {
    url: dbURL,
    authToken,
  },
  casing: "camelCase",
});
