import { APINotFound } from "@/constants.js";
import { server } from "@/libs/server.js";

server.notFound((c) => {
  return c.text(APINotFound, 404);
});
