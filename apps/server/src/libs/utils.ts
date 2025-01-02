import { hostname, port } from "@/constants.js";
import type { serve } from "@hono/node-server";
import { readFileSync } from "node:fs";
import { createServer } from "node:https";
import { server } from "./server.js";

export const getServeOptions = (
  keyPath?: string,
  certPath?: string
): Parameters<typeof serve>[0] => {
  if (keyPath && certPath) {
    return {
      hostname,
      createServer,
      fetch: server.fetch,
      serverOptions: {
        key: readFileSync(keyPath),
        cert: readFileSync(certPath),
      },
      port,
    };
  }

  return {
    hostname,
    fetch: server.fetch,
    port,
  };
};
