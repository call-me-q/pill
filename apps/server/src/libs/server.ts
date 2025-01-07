import type { auth } from "@/types.js";
import { Hono } from "hono";

interface IServer {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}

export const server = new Hono<IServer>();
