import { expect, it } from "@jest/globals";
import { typeDefs } from "../schemas/index.schemas";
import { resolvers } from "../resolvers/index.resolvers";
import { ApolloServer } from "@apollo/server";
import assert from "node:assert";

it("returns hello with the provided name", async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const helloQuery = `#graphql
    query {
      hello
    }
  `;

  const response = await testServer.executeOperation({
    query: helloQuery,
    variables: { name: "world" },
  });

  assert(response.body.kind === "single");
  expect(response.body.singleResult.errors).toBeUndefined();
  expect(response.body.singleResult.data?.hello).toBe("world");
});
