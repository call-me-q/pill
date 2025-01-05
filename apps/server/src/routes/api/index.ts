import { server } from "@/libs/server.js";
import "./auth.js";
import { api } from "./server.js";

server.route("/api", api);
