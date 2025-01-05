import { base } from "./server.js";

base.get("/", (c) => {
  return c.text("Hello and Welcome to PILL!");
});
