import { createApolloServer } from "./setup.server";

if (process.env.NODE_ENV !== "test") {
  createApolloServer().then(({ url }) => {
    console.log(`🚀 Query endpoint ready at ${url}`);
  });
}
