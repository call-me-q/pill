import { server } from "@/libs/server.js";
import "./not-found.js";
import "./root.js";
import { baseRoute } from "./server.js";

server.route("/", baseRoute);
