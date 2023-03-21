import { GraphQLServer } from "graphql-yoga";

//Type definitions (schema)
const typeDefs = `
    type Query {
      me: User!
      post: Post!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

//Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "12345",
        name: "Callum",
        email: "callum_88_708@hotmail.com",
        age: null,
      };
    },
    post() {
      return {
        id: "ABC123",
        title: "GraphQl: Do we need it?",
        body: "Yes, it's awesome. Of course we need it.",
        published: false,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up.");
});
