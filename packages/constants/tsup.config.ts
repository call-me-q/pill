import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./main.ts"],
  format: ["esm", "cjs"],
  target: "es2020",
  clean: true,
  dts: true,
});
