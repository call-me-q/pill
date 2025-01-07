import { server } from "@/libs/server.js";
import "./auth.js";
import { apiRoute } from "./server.js";

server.route("/api", apiRoute);
