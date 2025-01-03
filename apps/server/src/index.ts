import { serve } from "@hono/node-server";
import { certpath, keypath } from "./constants.js";
import { getServeOptions } from "./libs/utils.js";
import "./routes";

const serverInstance = getServeOptions(keypath, certpath);

serve(serverInstance, (info) => {
  console.log(`Server is running on ${info.address}:${info.port}`);
});
