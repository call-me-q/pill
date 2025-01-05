import { auth } from "@/libs/auth.js";
import { api } from "./server.js";

api.on(["POST", "GET"], "auth/**", (c) => {
  return auth.handler(c.req.raw);
});
