import { serve } from "@hono/node-server";
import { certpath, isOpenAPIEnabled, keypath } from "./constants.js";
import { getServeOptions } from "./libs/utils.js";
import "./routes/index.js";

const serverInstance = getServeOptions(keypath, certpath);

if (isOpenAPIEnabled) import("./libs/open-api.js");

serve(serverInstance, (info) => {
  console.log(`💊 is running on ${info.address}:${info.port}`);
});
