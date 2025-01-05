import { server } from "@/libs/server.js";
import "./root.js";
import { base } from "./server.js";

server.route("/", base);
