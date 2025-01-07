import { auth } from "@/libs/auth.js";
import { apiRoute } from "./server.js";

apiRoute.on(["POST", "GET"], "/auth/**", (c) => {
  return auth.handler(c.req.raw);
});
