import { server } from "@/libs/server.js";
import "./api/index.js";
import "./base/index.js";

server.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});
