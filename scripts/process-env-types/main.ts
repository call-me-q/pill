import { generateTypeDefinitions } from "./libs/generate-type-definitions";
import { parseArguments } from "./libs/parse-arguments";
import { parseEnvFile } from "./libs/parse-env-file";
import { resolveEnvFilePath } from "./libs/resolve-env-file-path";
import { writeTypeDefinitions } from "./libs/write-type-definitions";

const main = async () => {
  // Parse CLI arguments
  const { output: outputFilePath } = parseArguments();

  // Resolve the .env file path
  const envFilePath = await resolveEnvFilePath();

  // Read and parse the .env file
  const envVariables = parseEnvFile(envFilePath);

  // Generate TypeScript type definitions
  const typeDefinitions = generateTypeDefinitions(envVariables);

  // Write the type definitions to environment.d.ts
  writeTypeDefinitions(typeDefinitions, outputFilePath);
};

main().catch((err) => {
  console.error("Error occurred:", err);
  process.exit(1);
});
