import { generateTypeDefinitions } from "./libs/generate-type-definitions.js";
import { parseArguments } from "./libs/parse-arguments.js";
import { parseEnvFile } from "./libs/parse-env-file.js";
import { resolveEnvFilePath } from "./libs/resolve-env-file-path.js";
import { writeTurboGlobalEnv } from "./libs/write-turbo-globalEnv.js";
import { writeTypeDefinitions } from "./libs/write-type-definitions.js";

const main = async () => {
  // Parse CLI arguments
  const outputFilePath = await parseArguments();

  // Resolve the .env file path
  const envFilePath = await resolveEnvFilePath();

  // Read and parse the .env file
  const envVariables = parseEnvFile(envFilePath);

  // Generate TypeScript type definitions
  const typeDefinitions = generateTypeDefinitions(envVariables);

  // Write the type definitions to environment.d.ts
  writeTypeDefinitions(typeDefinitions, outputFilePath);

  // Update turbo.json file
  writeTurboGlobalEnv(Object.keys(envVariables));
};

main().catch((err) => {
  console.error("Error occurred:", err);
  process.exit(1);
});
