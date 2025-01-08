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
  // Fetch and parse non-auth schema
  const response = await fetch("http://localhost:3000/open-api");
  if (!response.ok) {
    throw new Error(`Failed to fetch OpenAPI spec: ${response.statusText}`);
  }

  const text = await response.text();
  const nonAuthSpec = JSON.parse(text);

  // Generate auth schema
  const authSpec =
    (await auth.api.generateOpenAPISchema()) as Swagger.SwaggerV3;
  if (!authSpec) {
    console.error("Error generating OpenAPI reference:");
    return c.json({ error: "Internal server error" }, 500);
  }
  // Merge schemas
  const mergeResult = merge([
    { oas: nonAuthSpec },
    {
      oas: authSpec,
      pathModification: { prepend: "/api/auth" },
    },
  ]);

  if (isErrorResult(mergeResult)) {
    return c.json({ error: "Failed to merge OpenAPI specs" }, 400);
  }

  return c.json(mergeResult.output);
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
