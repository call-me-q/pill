import { server } from "@/libs/server.js";
import "./root.js";
import { baseRoute } from "./server.js";

server.route("/", baseRoute);
