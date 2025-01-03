import { authModels, RolesEnum } from "@pill/constants";
import { db, users } from "@pill/db"; // your drizzle instance
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, openAPI, organization } from "better-auth/plugins";
import { eq } from "drizzle-orm";

// Convert the array into the desired object structure

export const auth = betterAuth({
  plugins: [
    openAPI(),
    admin({
      defaultRole: RolesEnum.CUSTOMER,
      adminRole: [RolesEnum.MANAGEMENT, RolesEnum.BEHOLDER],
    }),
    organization({
      allowUserToCreateOrganization: async (user) => {
        const { role } = await db
          .select({ role: users.role })
          .from(users)
          .where(eq(users.id, user.id))
          .then((q) => q[0]);
        return role === RolesEnum.BEHOLDER;
      },
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  ...authModels,
});

export const authOpenAPISchema = await auth.api.generateOpenAPISchema();
