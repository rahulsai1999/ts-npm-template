import typescript from "rollup-plugin-typescript2";
import nodePollyfills from "rollup-plugin-node-polyfills";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "auto",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ],
  plugins: [
    nodePollyfills(),
    typescript({ typescript: require("typescript") }),
  ],
};
