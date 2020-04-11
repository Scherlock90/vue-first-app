const ALIASES = ['Components', 'Assets', 'Store']
const getPath = (key) => path.resolve(__dirname, `../src/${key.toLowerCase()}`)
export const alias = ALIASES.reduce((result, key) => ({ ...result, [`@${key}`]: getPath(key) }), {})