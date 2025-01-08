import { APINotFound } from "@/constants.js";
import { server } from "@/libs/server.js";
import "./api/index.js";
import "./base/index.js";

server.notFound((c) => {
  return c.text(APINotFound, 404);
});
