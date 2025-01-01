import { timestamps } from "@/helpers/timestamp.helpers";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./users"; // Assuming the users table is defined in users.ts

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().notNull(), // Unique identifier for each account
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id), // Foreign key linking to the users table
  accountId: varchar("account_id", { length: 255 }).notNull(), // Account ID provided by SSO or userId for credential accounts
  providerId: varchar("provider_id", { length: 255 }).notNull(), // Provider identifier
  accessToken: varchar("access_token", { length: 255 }), // Optional access token from provider
  refreshToken: varchar("refresh_token", { length: 255 }), // Optional refresh token from provider
  accessTokenExpiresAt: timestamp("access_token_expires_at"), // Optional expiration time for the access token
  refreshTokenExpiresAt: timestamp("refreshToken_expires_at"), // Optional expiration time for the refresh token
  scope: varchar("scope", { length: 255 }), // Optional scope of the account
  password: varchar("password", { length: 255 }), // Password for email/password authentication
  ...timestamps,
});
