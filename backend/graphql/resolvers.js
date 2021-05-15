const { resolvers: PalJS } = require('./paljs/resolvers')

const resolvers = [
    ...PalJS
]

module.exports = { resolvers }