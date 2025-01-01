import { defineConfig } from "drizzle-kit";
import { dbURL } from "./src/constants";

export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/schema",
  casing: "snake_case",
  dbCredentials: {
    url: dbURL,
  },
});
