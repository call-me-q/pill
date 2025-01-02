import { serve } from "@hono/node-server";

import { certpath, keypath } from "./constants.js";
import { server } from "./libs/server.js";
import { getServeOptions } from "./libs/utils.js";

server.get("/", (c) => {
  return c.text("Hello Hono!");
});

const serverInstance = getServeOptions(keypath, certpath);

serve(serverInstance, (info) => {
  console.log(`Server is running on ${info.address}:${info.port}`);
});
