import { RolesEnum } from "@pill/constants";
import { db, eq, users } from "@pill/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, openAPI, organization } from "better-auth/plugins";
import { authModels } from "./models.js";
import { authProviders } from "./providers.js";

export const auth = betterAuth({
  plugins: [
    openAPI(),
    admin({
      defaultRole: RolesEnum.CUSTOMER,
      adminRole: [RolesEnum.MANAGEMENT, RolesEnum.BEHOLDER],
    }),
    organization({
      allowUserToCreateOrganization: async (user) => {
        const query = await db
          .select({ role: users.role })
          .from(users)
          .where(eq(users.id, user.id))
          .then((q) => q[0]);

        if (query) return query.role === RolesEnum.BEHOLDER;
        return false;
      },
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  ...authProviders,
  ...authModels,
});
