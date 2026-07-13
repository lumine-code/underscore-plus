const fs = require('fs')
const path = require('path')
const esbuild = require('esbuild')

const rootPath = path.resolve(__dirname, '..')
const outputPath = path.join(rootPath, 'lib')

fs.rmSync(outputPath, {recursive: true, force: true})

esbuild.buildSync({
  entryPoints: [path.join(rootPath, 'src', 'underscore-plus.mjs')],
  outfile: path.join(outputPath, 'underscore-plus.js'),
  bundle: true,
  external: ['underscore'],
  format: 'cjs',
  platform: 'node',
  sourcemap: true,
  target: 'node20'
})
