import { GraphQLServer } from "graphql-yoga";

//Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String! 
        name: String!
        location: String!
        bio: String!
    }
`;

//Resolvers
const resolvers = {
  Query: {
    hello() {
      return "This is my first query!";
    },
    name() {
      return "Callum";
    },
    location() {
      return "Buxton, GB";
    },
    bio() {
      return "I'm learning how to create a GraphQL API!";
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
