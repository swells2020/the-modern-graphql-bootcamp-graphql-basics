import { GraphQLServer } from "graphql-yoga";

//Type definitions (schema)
const typeDefs = `
    type Query {
      title: String!
      price: Float!
      releaseYear: Int
      rating: Float
      inStock: Boolean!
    }
`;

//Resolvers
const resolvers = {
  Query: {
    title() {
      return "headphones"
    },
    price() {
      return 6.99
    },
    releaseYear() {
      return 2013
    },
    rating() {
      return null
    },
    inStock() {
      return true
    }
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up.");
});
