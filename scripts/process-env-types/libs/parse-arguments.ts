import { execSync } from "node:child_process";
import { getMainFilePath } from "./utils";

interface IWorkspaces {
  name: string;
  version: string;
  dependencies?: Record<
    string,
    {
      version: string;
      resolved: string;
      overridden: boolean;
    }
  >;
}

export const parseArguments = async (): Promise<string> => {
  const args = process.argv.slice(2); // Skip "node" and script name
  const outputArgIndex = args.indexOf("--output");

  if (outputArgIndex === -1 || outputArgIndex + 1 >= args.length) {
    console.error(
      "Usage: [tsx|node] file.[mts|mjs] --output <output-file-path>"
    );
    process.exit(1);
  }

  const workspaceOutput: string = args[outputArgIndex + 1];
  const workspaces: string = execSync("npm ls --workspaces --json", {
    encoding: "utf-8",
    cwd: await getMainFilePath(),
  });

  const dependencies: IWorkspaces["dependencies"] = (
    JSON.parse(workspaces) as IWorkspaces
  ).dependencies;

  if (dependencies) {
    const resolved: string = dependencies[workspaceOutput].resolved;
    const output: string = resolved.replace("file:../../", "");
    return output;
  }

  console.error(`Workspace ${workspaceOutput} is not found.`);
  process.exit(1);
};
