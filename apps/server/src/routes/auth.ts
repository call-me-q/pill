import { auth } from "@/libs/auth.js";
import { server } from "@/libs/server.js";

server.on(["POST", "GET"], "/api/auth/**", (c) => {
  return auth.handler(c.req.raw);
});
