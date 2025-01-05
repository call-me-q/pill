import { serve } from "@hono/node-server";
import { certpath, keypath } from "./constants.js";
import "./libs/open-api.js";
import { getServeOptions } from "./libs/utils.js";
import "./routes/index.js";

const serverInstance = getServeOptions(keypath, certpath);

serve(serverInstance, (info) => {
  console.log(`💊 is running on ${info.address}:${info.port}`);
});
