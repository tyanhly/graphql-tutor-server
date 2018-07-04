import {buildSchema} from "graphql";

const schema = buildSchema(`
  input UpdatePostInput {
    content: String
    title: String
    userId: ID
  }
  
  input CreatePostInput {
    content: String!
    title: String!
    userId: ID!
  }
  
  type Post {
    id: ID!
    content: String!
    title: String!
  }
  
  input CreateUserInput {
    firstName: String
    lastName: String
    email: String
    posts: [CreatePostInput]
  }
  
  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
  }
  
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    posts: [Post]
  }
  
  type Query{
    getUsers(limit: Int!): [User]
    getUser(id: ID!): User
  }
  
  type Mutation{
    createUser(createUserInput: CreateUserInput): User
    updateUser(id: ID!, updateUserInput: UpdateUserInput): User
    createPost(createPostInput: CreatePostInput): Post
    updatePost(id: ID!, updatePostInput: UpdatePostInput): Post
  }
  
`);

//

export default schema;