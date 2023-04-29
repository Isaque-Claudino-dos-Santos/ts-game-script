/** @type {import('typedoc').TypeDocOptions} */
const config = {
  entryPoints: ['./src/Display/*', './src/Event/*', './src/Draw/*'],
  entryPointStrategy: 'Expand',
  plugin: [
    'typedoc-plugin-rename-defaults',
    'typedoc-plugin-merge-modules',
    'typedoc-plugin-markdown',
  ],
  emit: 'both',
}

module.exports = config
