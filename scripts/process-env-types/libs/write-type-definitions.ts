import * as fs from "fs";
import * as path from "path";
import { getMainFilePath } from "./utils";

export const writeTypeDefinitions = async (
  definitions: string,
  outputDirPath: string
): Promise<void> => {
  const outputFilePath = path.resolve(
    await getMainFilePath(),
    outputDirPath,
    "environment.d.ts"
  );
  fs.writeFileSync(outputFilePath, definitions.trim() + "\n");
  console.log(`Generated TypeScript definitions in ${outputFilePath}`);
};
