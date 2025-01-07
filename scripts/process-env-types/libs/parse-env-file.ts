import * as fs from "fs";

export const parseEnvFile = (filePath: string): Record<string, string> => {
  if (!fs.existsSync(filePath)) {
    console.error(".env file not found at:", filePath);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const variables: Record<string, string> = {};

  content.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("#")) {
      const [key, ...valueParts] = trimmedLine.split("=");
      const value = valueParts.join("=").replace(/^['"]|['"]$/g, ""); // Remove surrounding quotes
      if (key) variables[key] = value;
    }
  });

  return variables;
};
