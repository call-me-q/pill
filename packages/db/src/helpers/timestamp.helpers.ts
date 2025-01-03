import { sql } from "drizzle-orm";
import { integer } from "drizzle-orm/sqlite-core";

export const timestamps = {
  updatedAt: integer({ mode: "timestamp_ms" }).default(sql`(CURRENT_TIMESTAMP)`),
  createdAt: integer({ mode: "timestamp_ms" }).default(sql`(CURRENT_TIMESTAMP)`),
  deletedAt: integer({ mode: "timestamp_ms" })
};
