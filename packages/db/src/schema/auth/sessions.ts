import { timestamps } from "@/helpers/timestamp.helpers";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./users"; // Assuming the users table is defined in users.ts

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().notNull(), // Unique identifier for each session
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id), // Foreign key referencing users table
  token: varchar("token", { length: 255 }).notNull(), // Unique session token
  expiresAt: timestamp("expires_at").notNull(), // Expiration time of the session
  ipAddress: varchar("ipAddress", { length: 45 }), // Optional IP address of the device
  userAgent: varchar("userAgent", { length: 255 }), // Optional user agent information of the device
  ...timestamps,
});
