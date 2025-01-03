import { timestamps } from "@/helpers/timestamp.helpers.js";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { users } from "./users.mjs"; // Assuming the users table is defined in users.ts

export const accounts = sqliteTable("accounts", {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each account
  userId: text()
    .notNull()
    .references(() => users.id), // Foreign key linking to the users table
  accountId: text({ length: 255 }).notNull(), // Account ID provided by SSO or userId for credential accounts
  providerId: text({ length: 255 }).notNull(), // Provider identifier
  accessToken: text({ length: 255 }), // Optional access token from provider
  refreshToken: text({ length: 255 }), // Optional refresh token from provider
  accessTokenExpiresAt: integer({ mode: "timestamp_ms" }), // Optional expiration time for the access token
  refreshTokenExpiresAt: integer({ mode: "timestamp_ms" }), // Optional expiration time for the refresh token
  scope: text({ length: 255 }), // Optional scope of the account
  password: text({ length: 255 }), // Password for email/password authentication
  ...timestamps,
});
