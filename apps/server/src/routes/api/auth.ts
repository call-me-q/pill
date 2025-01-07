import { server } from "@/libs/server.js";
import { auth } from "./auth/lib.js";

server.on(["POST", "GET"], "/auth/**", (c) => {
  return auth.handler(c.req.raw);
});
