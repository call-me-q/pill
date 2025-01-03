import { timestamps } from "@/helpers/timestamp.helpers.js";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

const organizationsColumns = {
  id: text()
    .$defaultFn(() => nanoid())
    .primaryKey(), // Unique identifier for each organization
  name: text({ length: 255 }).notNull(), // The name of the organization
  slug: text({ length: 255 }).notNull(), // The slug of the organization
  logo: text({ length: 255 }), // The logo of the organization
  metadata: text({ length: 255 }), // Additional metadata for the organization
};

export const organizations = sqliteTable("organization", {
  ...organizationsColumns,
  ...timestamps,
});
