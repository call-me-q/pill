import { hostname, isEncrypted, port } from "@/constants.js";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { server } from "./libs/server.js";

server.use(
  "*", // replacing with "*" to enable cors for all routes
  cors({
    origin: `${isEncrypted ? "https" : "http"}://${hostname}:${port}`, // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

server.use(prettyJSON());
