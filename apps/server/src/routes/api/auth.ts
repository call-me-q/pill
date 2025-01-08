import { auth } from "./auth/lib.js";
import { apiRoute } from "./server.js";

apiRoute.on(["POST", "GET"], "auth/**", (c) => {
  return auth.handler(c.req.raw);
});
