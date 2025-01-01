import { timestamps } from "@/helpers/timestamp.helpers";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const verifications = pgTable("verifications", {
  id: uuid("id").primaryKey().notNull(), // Unique identifier for each verification
  identifier: varchar("identifier", { length: 255 }).notNull(), // Identifier for the verification request
  value: varchar("value", { length: 255 }).notNull(), // Value to be verified
  expiresAt: timestamp("expire_at").notNull(), // Expiration time for the verification request
  ...timestamps,
});
