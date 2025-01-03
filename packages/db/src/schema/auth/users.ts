import { timestamps } from "@/helpers/timestamp.helpers.js";
import { RolesEnum } from "@pill/constants";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export const users = sqliteTable("users", {
  id: text().$defaultFn(() => nanoid()).primaryKey(), // Unique identifier for each account
  name: text({ length: 255 }).notNull(), // User's chosen display name
  email: text({ length: 140 }).notNull(), // User's email address for communication and login
  emailVerified: integer({ mode: "boolean" }).default(false).notNull(), // Whether the user's email is verified
  role: text({
    enum: Object.values(RolesEnum) as [string],
  }),
  image: text(), // User's image URL
  ...timestamps, // Timestamp of last info update
});
