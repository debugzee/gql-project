const userTypeDefs = `#graphql
  type User {
    name: String!
    username: String!
  }

  type UserDelete {
    id: String!
  }

  input UserCreateInput {
    username: String!
    name: String!
  }

  input UpdateUserInput {
    name: String!
  }

  input UserQueryInput {
    username: String!
  }

  input UsersQueryInput {
    username: String
    name: String
  }

  type Query {
    users(input: UsersQueryInput): [User]!
    user(input: UserQueryInput): User!
  }

  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(id: String!, input: UpdateUserInput!): User
    deleteUser(id: String!): UserDelete
  }
`;

export { userTypeDefs };
