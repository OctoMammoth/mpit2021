require('dotenv').config()

const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const { applyMiddleware } = require('graphql-middleware')
const { PrismaClient } = require('@prisma/client')
const { PrismaSelect } = require('@paljs/plugins')
const { typeDefs, resolvers } = require('./graphql')

const { checkRole } = require('./utils')

const prisma = new PrismaClient()

const middleware = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}

const schema = applyMiddleware(
    makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    middleware
)

const server = new ApolloServer({
    schema,
    playground: process.env["NODE_ENV"] === "PROD" ? false : "/",
    context: (req) => {
        const { authorization } = req.req.headers

        const checkToken = async () => {
            const roles = ['USER', 'ADMIN']
            const checks = await Promise.all(
                roles.map(async (role) => {
                    return await checkRole(authorization, role, prisma, false)
                })
            )
            const find = checks.find((object) => object)
            if (!find) throw new Error('Token timeout')
            return find
        }
        
        return {
            prisma,
            authorization,
            checkToken
        }
    }
})

const port = process.env["APOLLO_PORT"] || 4000

server.listen({ port }, () => {
    console.log(`Server start playground http://localhost:${port}/`)
})
