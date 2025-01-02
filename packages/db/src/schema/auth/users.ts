import { timestamps } from "@/helpers/timestamp.helpers";
import { RolesEnum } from "@pill/constants";
import { boolean, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull().unique(), // Unique identifier for each user
  name: varchar("name", { length: 255 }).notNull(), // User's chosen display name
  email: varchar("email", { length: 255 }).notNull(), // User's email address for communication and login
  emailVerified: boolean("emailVerified").default(false).notNull(), // Whether the user's email is verified
  role: varchar("role", {
    enum: Object.values(RolesEnum) as [string],
  }),
  image: varchar("image", { length: 255 }), // User's image URL
  ...timestamps, // Timestamp of last info update
});
