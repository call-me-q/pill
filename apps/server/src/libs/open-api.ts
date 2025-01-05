import { apiReference } from "@scalar/hono-api-reference";
import { server } from "./server.js";

server.doc31("/open-api", {
  openapi: "3.1.0",
  info: { title: "foo", version: "1" },
}); // new endpoint

server.get(
  "/docs",
  apiReference({
    spec: {
      url: "/open-api",
    },
  })
);
