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
  userId: text()
    .notNull()
    .references(() => users.id),
  organizationId: text()
    .notNull()
    .references(() => organizations.id),
  role: text({ enum: Object.values(RolesEnum) as [string] }).notNull(),
};

export const members = sqliteTable("members", {
  ...organizationsColumns,
  ...timestamps,
});
