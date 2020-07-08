import { join } from 'path'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { resolvers } from './resolvers'

const schema = loadSchemaSync(join(__dirname, './typeDefs/schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

export const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
})
