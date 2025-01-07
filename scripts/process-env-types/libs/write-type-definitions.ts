import * as fs from "fs";
import * as path from "path";

export const writeTypeDefinitions = (
  definitions: string,
  outputDirPath: string
): void => {
  const outputFilePath = path.resolve(outputDirPath, "environment.d.ts");
  fs.writeFileSync(outputFilePath, definitions.trim() + "\n");
  console.log(`Generated TypeScript definitions in ${outputFilePath}`);
};
