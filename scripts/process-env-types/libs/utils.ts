import { findMonorepoRoot } from "@alienfast/find-monorepo-root";

export const getMainFilePath = async () => {
  const mainFilePath = await findMonorepoRoot(process.cwd()).then(
    (result) => result.dir
  );
  if (!mainFilePath) {
    console.error("Could not determine the main module's filename.");
    process.exit(1);
  }

  return mainFilePath;
};
