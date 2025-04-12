import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import fs from "fs";

const pkg = JSON.parse(
    fs.readFileSync(new URL("./package.json", import.meta.url))
);
const esbuildPlugin = esbuild.default ?? esbuild;

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            postcss(),
            json(),
            esbuildPlugin({
                jsx: "automatic",
                target: "esnext",
            }),
        ],
    },
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];
