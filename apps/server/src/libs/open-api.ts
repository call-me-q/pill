import { apiReference } from "@scalar/hono-api-reference";
import { serverOpenAPI } from "./server.js";

serverOpenAPI.doc31("/open-api", {
  openapi: "3.1.0",
  info: { title: "foo", version: "1" },
}); // new endpoint

serverOpenAPI.get(
  "/docs",
  apiReference({
    spec: {
      url: "/open-api",
    },
  })
);
