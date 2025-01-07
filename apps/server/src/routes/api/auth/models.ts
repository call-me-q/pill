import type { BetterAuthOptions } from "better-auth";

const modelNames = [
  "organization",
  "invitation",
  "member",
  "user",
  "session",
  "verification",
  "account",
];

const genAuthModels = (array: string[]) => {
  return array.reduce(
    (acc, name) => {
      acc[name] = { modelName: `${name}s` }; // Automatically pluralize
      return acc;
    },
    {} as Record<string, { modelName: string }>
  ) satisfies BetterAuthOptions;
};

export const authModels = genAuthModels(modelNames);
