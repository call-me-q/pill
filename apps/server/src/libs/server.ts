import { OpenAPIHono } from "@hono/zod-openapi";
import type { auth } from "./auth.js";

interface IServer {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}

export const server = new OpenAPIHono<IServer>();
