import { z } from "@hono/zod-openapi";

export const AuthSignInParamSchema = z.object({
  password: z.string(),
  email: z.string().email("This is not email"),
  callbackURL: z.string().url("Not a valid URL").optional(),
  rememberMe: z.boolean().optional(),
});

export const AuthSignInResponseSchema = z.object({});
