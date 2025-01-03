import { Hono } from "hono";
import type { auth } from "./auth.js";

type ServerType = {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}

export const server = new Hono<ServerType>();
