import { baseRoute } from "./server.js";

baseRoute.get("/", (c) => {
  return c.text("Hello and Welcome to PILL!");
});
