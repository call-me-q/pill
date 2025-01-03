import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./main.mts"],
  format: ["esm", "cjs"],
  target: "es2020",
  clean: true,
  dts: true,
});
