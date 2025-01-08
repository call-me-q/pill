import { timestamps } from "@/helpers/timestamp.helpers.js";
import { RolesEnum } from "@capsule/constants";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

const defaultColumns = {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each account
  name: text({ length: 255 }).notNull(), // User's chosen display name
  email: text({ length: 140 }).notNull(), // User's email address for communication and login
  emailVerified: integer({ mode: "boolean" }).default(false).notNull(), // Whether the user's email is verified
  image: text(), // User's image URL
};

const adminColumns = {
  role: text({ enum: Object.values(RolesEnum) as [string] }).notNull(),
  banned: integer({ mode: "boolean" }).default(false).notNull(),
  banReason: text(),
  banExpires: integer(),
};

export const users = sqliteTable("users", {
  ...defaultColumns,
  ...adminColumns,
  ...timestamps, // Timestamp of last info update
});
