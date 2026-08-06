const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const rootPath = path.resolve(__dirname, "..");
const outputPath = path.join(rootPath, "lib");
const implementationPath = path.join(outputPath, "underscore-plus-impl.js");

fs.rmSync(outputPath, { recursive: true, force: true });

esbuild.buildSync({
  entryPoints: [path.join(rootPath, "src", "underscore-plus.mjs")],
  outfile: implementationPath,
  bundle: true,
  external: ["underscore"],
  format: "cjs",
  platform: "node",
  sourcemap: true,
  target: "node24",
});

fs.writeFileSync(
  path.join(outputPath, "underscore-plus.js"),
  `'use strict'\n\n` +
    `const implementation = require('./underscore-plus-impl')\n` +
    `const exported = Object.assign({}, implementation.default, implementation)\n` +
    `Object.defineProperty(exported, '__esModule', {configurable: true, value: true, writable: true})\n` +
    `exported.default = implementation.default\n` +
    `module.exports = exported\n`,
);
