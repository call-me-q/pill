import { OpenAPIHono } from "@hono/zod-openapi";
import { Hono } from "hono";

export const apiRoute = new Hono();
export const apiOpenAPIRoute = new OpenAPIHono();
