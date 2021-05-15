const { default: gql } = require('graphql-tag')

const Post = gql`
  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    maxHumanCount: Int!
    prizeCount: Int!
    date: DateTime!
    image: String
  }

  type Query {
    findUniquePost(where: PostWhereUniqueInput!): Post
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): Post
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): [Post!]
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): AggregatePost
  }
  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(where: PostWhereUniqueInput!, data: PostUpdateInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(
      where: PostWhereInput
      data: PostUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Post,
}
