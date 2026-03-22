import { defineConfig } from "tsdown";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    target: "es2022",
    treeshake: false,
    sourcemap: true,
    clean: true,
    dts: true,
    outDir: "dist",
    define: {
        __PACKAGE_VERSION__: JSON.stringify(pkg.version),
    },
});
