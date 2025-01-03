import { server } from "@/libs/server.js";

server.get("/", (c) => {
  return c.text("Hello Hono!");
});
