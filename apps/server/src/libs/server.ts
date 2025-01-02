import { Hono } from "hono";
import type { auth } from "./auth.js";

export const server = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();
