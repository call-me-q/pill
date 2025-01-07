import { OpenAPIHono } from "@hono/zod-openapi";
import { Hono } from "hono";
import type { auth } from "./auth.js";

interface IServer {
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}

export const server = new Hono<IServer>();
export const serverOpenAPI = new OpenAPIHono();
