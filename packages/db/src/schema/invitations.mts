import { timestamps } from "@/helpers/timestamp.helpers.js";
import { RolesEnum } from "@pill/constants";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { organizations } from "./organizations.mjs";
import { users } from "./users.mjs";

const organizationsColumns = {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each organization
  email: text({ length: 140 })
    .notNull()
    .references(() => users.email),
  organizationId: text()
    .notNull()
    .references(() => organizations.id),
  role: text({ enum: Object.values(RolesEnum) as [string] }).notNull(),
  status: text({ enum: ["pending", "accepted", "rejected"] }).default(
    "pending"
  ),
};

export const members = sqliteTable("members", {
  ...organizationsColumns,
  createdAt: timestamps.createdAt,
});
