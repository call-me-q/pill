const modelNames = [
  "organization",
  "invitation",
  "member",
  "user",
  "session",
  "verification",
  "account",
];

export const genAuthModels = (array: string[]) => {
  return array.reduce(
    (acc, name) => {
      acc[name] = { modelName: `${name}s` }; // Automatically pluralize
      return acc;
    },
    {} as Record<string, { modelName: string }>
  );
};

export const authModels = genAuthModels(modelNames);
