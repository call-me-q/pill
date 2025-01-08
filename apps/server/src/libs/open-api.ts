import { auth } from "@/routes/api/auth/lib.js"; // import your Better Auth implementation (usually `auth.ts`)
import { apiReference } from "@scalar/hono-api-reference"; // import your UI preference, here we're using scalar
import type { Swagger } from "atlassian-openapi"; // import type because we need it for type casting in order for `openapi-merge` complains
import { openAPISpecs } from "hono-openapi"; // import hono-openapi for Hono's non-"Better Auth Open API schema"
import { isErrorResult, merge } from "openapi-merge";
import { server } from "./server.js"; // import your Hono main route/server.

// Generate non Better Auth Open API Schema
server.get(
  "/open-api",
  openAPISpecs(server, {
    documentation: {
      openapi: "3.1.0",
      info: { title: "foo", version: "1" },
      servers: [{ url: "http://localhost:3000", description: "local api" }],
    },
  })
);

// Merge both Better Auth and non Better Auth Open API Schema
server.get("/open-api/reference", async (c) => {
  const nonAuthRef = await fetch("http://localhost:3000/open-api").then(
    (res) => res.body
  );
  let result = "";

  if (nonAuthRef) {
    const reader = nonAuthRef.getReader();
    const decoder = new TextDecoder();

    let status = false;
    while (!status) {
      const { value, done } = await reader.read();
      if (value) {
        result += decoder.decode(value, { stream: true });
      }
      status = done;
    }
  }

  const authRef = (await auth.api.generateOpenAPISchema()) as Swagger.SwaggerV3;

  const mergeResult = merge([
    {
      oas: JSON.parse(result),
    },
    {
      oas: authRef,
      pathModification: {
        prepend: "/api/auth",
      },
    },
  ]);

  if (isErrorResult(mergeResult)) return c.body(JSON.stringify(c.error));

  return c.body(JSON.stringify(mergeResult.output), 200);
});

// Open API UI
server.get(
  "/docs",
  apiReference({
    pageTitle: "Hono API Reference",
    spec: {
      url: "/open-api/reference",
    },
  })
);
