import { findMonorepoRoot } from "@alienfast/find-monorepo-root";
import * as path from "path";

export const resolveEnvFilePath = async (): Promise<string> => {
  const mainFilePath = await findMonorepoRoot(process.cwd()).then(
    (result) => result.dir
  );
  if (!mainFilePath) {
    console.error("Could not determine the main module's filename.");
    process.exit(1);
  }
  return path.resolve(mainFilePath, ".env");
};
