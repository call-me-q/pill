export const parseArguments = (): { output: string } => {
  const args = process.argv.slice(2); // Skip "node" and script name
  const outputArgIndex = args.indexOf("--output");

  if (outputArgIndex === -1 || outputArgIndex + 1 >= args.length) {
    console.error(
      "Usage: [tsx|node] file.[mts|mjs] --output <output-file-path>"
    );
    process.exit(1);
  }

  const output = args[outputArgIndex + 1];
  return { output };
};
