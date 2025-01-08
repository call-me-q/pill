import { describeRoute } from "hono-openapi";
import { baseRoute } from "./server.js";

baseRoute.get(
  "/",
  describeRoute({
    tags: ["dsa"],
  }),
  (c) => {
    return c.text("Hello and Welcome to PILL!");
  }
);
