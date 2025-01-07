import { serve } from "@hono/node-server";
import { certpath, keypath } from "./constants.js";
import { getServeOptions } from "./libs/utils.js";
import "./routes/index.js";

const serverInstance = getServeOptions(keypath, certpath);

if (process.env.ENABLE_OPEN_API.toLowerCase() === "true")
  import("./libs/open-api.js");

serve(serverInstance, (info) => {
  console.log(`💊 is running on ${info.address}:${info.port}`);
});
