import { timestamps } from "@/helpers/timestamp.helpers.js";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export const verifications = sqliteTable("verifications", {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each account
  identifier: text().notNull(), // Identifier for the verification request
  value: text().notNull(), // Value to be verified
  expiresAt: integer({ mode: "timestamp" }).notNull(), // Expiration time for the verification request
  ...timestamps,
});
