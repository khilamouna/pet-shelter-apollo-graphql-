import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./pets/index.js";

//ApolloServer: require 2 params: schema defenition and resolvers
const server = new ApolloSever({
  typeDefs,
  resolvers,
});
// set up express server by passing an ApolloServer instance to ApolloStandAloneServer
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server ready at:${url}`);
