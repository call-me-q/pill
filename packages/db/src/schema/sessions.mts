import { timestamps } from "@/helpers/timestamp.helpers.js";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { users } from "./users.mjs"; // Assuming the users table is defined in users.ts

const defaultColumns = {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each account
  userId: text()
    .notNull()
    .references(() => users.id), // Foreign key referencing users table
  token: text({ length: 255 }).notNull(), // Unique session token
  expiresAt: integer({
    mode: "timestamp",
  }).notNull(), // Expiration time of the session
  ipAddress: text({ length: 45 }), // Optional IP address of the device
  userAgent: text({ length: 255 }), // Optional user agent information of the device
};

const adminColumns = {
  impersonatedBy: text({ length: 80 }),
};

const organizationColumns = {
  activeOrganizationId: text({ length: 80 }),
};
// Define the sessions table schema
export const sessions = sqliteTable("sessions", {
  ...defaultColumns,
  ...adminColumns,
  ...organizationColumns,
  ...timestamps,
});
