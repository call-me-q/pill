import { defineConfig } from "drizzle-kit";
import { authToken, dbURL } from "./src/constants.js";

export default defineConfig({
  dialect: "turso", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/schema/",
  casing: "snake_case",
  dbCredentials: {
    url: dbURL,
    authToken,
  },
});
