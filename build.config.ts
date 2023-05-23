import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['src/index'],
  alias: {
    '~': resolve(__dirname, './src'),
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
