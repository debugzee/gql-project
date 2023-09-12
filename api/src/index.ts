import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { GraphQLError } from "graphql";
// import { userInterfaces } from "./interfaces";
import { typeDefs } from "./schemas/index.schemas";
import { resolvers } from "./resolvers/index.resolvers";
import * as repositories from "./db/index.db";
import { ServerContext } from "./interfaces/global.interfaces";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  context: async (): Promise<ServerContext> => {
    // // get the user token from the headers
    // const token = req.headers.authorization || "";
    // // try to retrieve a user with the token
    // const user = getUser(token);
    // // optionally block the user
    // // we could also check user roles/permissions here
    // if (!user)
    //   // throwing a `GraphQLError` here allows us to specify an HTTP status code,
    //   // standard `Error`s will have a 500 status code by default
    //   throw new GraphQLError("User is not authenticated", {
    //     extensions: {
    //       code: "UNAUTHENTICATED",
    //       http: { status: 401 },
    //     },
    //   });
    // // add the user to the context
    // return { user };
    // console.log(req.headers.authorization);
    return { repositories };
  },
}).then(({ url }) => {
  console.log(`🚀 Server listening at: ${url}`);
});
