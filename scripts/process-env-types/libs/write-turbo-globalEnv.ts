import fs from "node:fs";
import path from "node:path";
import { getMainFilePath } from "./utils";

interface TurboJson {
  extends?: string;
  pipeline: Record<string, PipelineConfig>;
  globalDependencies?: string[];
  globalEnv?: string[];
  globalLabels?: Record<string, string>;
}

interface PipelineConfig {
  dependsOn?: string[];
  outputs?: string[];
  cache?: boolean;
  persistent?: boolean;
  env?: string[];
  inputs?: string[];
  labels?: Record<string, string>;
}

export const writeTurboGlobalEnv = async (variables: string[]) => {
  try {
    const turboFilePath = path.resolve(await getMainFilePath(), "turbo.json");
    const JSONContent = JSON.parse(
      fs.readFileSync(turboFilePath, "utf-8")
    ) as TurboJson;

    JSONContent.globalEnv = variables;

    fs.writeFileSync(
      turboFilePath,
      JSON.stringify(JSONContent, null, 2) + "\n"
    );
    console.log(`turbo.json is updated.`);
  } catch (error) {
    console.error("Failed to update turbo.json:", error);
  }
};
