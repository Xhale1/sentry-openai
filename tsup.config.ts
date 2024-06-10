import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts", "src/instrument.ts"],
  clean: true,
  format: ["esm"],
  sourcemap: "inline",
  ...options,
}));
