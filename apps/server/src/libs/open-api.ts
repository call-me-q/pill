import { apiReference } from "@scalar/hono-api-reference";
import { openAPISpecs } from "hono-openapi";
import { server } from "./server.js";

server.get(
  "/open-api",
  openAPISpecs(server, {
    documentation: {
      openapi: "3.1.0",
      info: { title: "foo", version: "1" },
      servers: [{ url: "" }],
      externalDocs: {
        description: "Auth Schema",
        url: "/api/auth/reference",
      },
    },
  })
); // new endpoint

server.get(
  "/docs",
  apiReference({
    spec: {
      theme: "saturn",
      url: "/open-api",
    },
  })
);
