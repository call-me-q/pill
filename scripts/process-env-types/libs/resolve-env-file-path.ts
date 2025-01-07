import * as path from "path";
import { getMainFilePath } from "./utils";

export const resolveEnvFilePath = async (): Promise<string> => {
  return path.resolve(await getMainFilePath(), ".env");
};
