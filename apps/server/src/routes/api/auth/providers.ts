import type { BetterAuthOptions } from "better-auth";

export const authProviders = {
  emailAndPassword: {
    enabled: true,
  },
} satisfies BetterAuthOptions;
