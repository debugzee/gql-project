import { ApolloServer } from "@apollo/server";
import { createApolloServer } from "../setup.server";
import { ServerContext } from "../interfaces/global.interfaces";
import {
  userConstants,
  CREATE_USER,
  UPDATE_USER,
  FETCH_USER,
  FETCH_USERS,
  DELETE_USER,
} from "./constants/test.constants";
// we'll use supertest to test our server
import request from "supertest";

let server: ApolloServer<ServerContext>, url: string;

// before the tests we spin up a new Apollo Server
beforeAll(async () => {
  // Note we must wrap our object destructuring in parentheses because we already declared these variables
  // We pass in the port as 0 to let the server pick its own ephemeral port for testing
  ({ server, url } = await createApolloServer({ port: 0 }));
});

// after the tests we'll stop the server
afterAll(async () => {
  await server?.stop();
});

describe("e2e User", () => {
  it("Should create a User", async () => {
    const response = await request(url).post("/").send(CREATE_USER);
    expect(response.text).not.toContain("errors");
    expect(response.body.data?.createUser).not.toBeUndefined();
    expect(response.body.data.createUser.name).toBe(userConstants.createUser.name);
    expect(response.body.data.createUser.username).toBe(userConstants.createUser.username);
  });

  it("Should fetch a User", async () => {
    const response = await request(url).post("/").send(FETCH_USER);
    expect(response.text).not.toContain("errors");
    expect(response.body.data?.user).not.toBeUndefined();
    expect(response.body.data.user.name).toBe(userConstants.createUser.name);
    expect(response.body.data.user.username).toBe(userConstants.createUser.username);
  });

  it("Should fetch all User", async () => {
    const response = await request(url).post("/").send(FETCH_USERS);
    expect(response.text).not.toContain("errors");
    expect(response.body.data?.users).not.toBeUndefined();
    expect(response.body.data.users).toContainEqual(userConstants.createUser);
  });

  it("Should update a User", async () => {
    const response = await request(url).post("/").send(UPDATE_USER);
    expect(response.text).not.toContain("errors");
    expect(response.body.data?.updateUser).not.toBeUndefined();
    expect(response.body.data.updateUser.name).toBe(userConstants.updateUser.input.name);
  });

  it("Should delete a user", async () => {
    const response = await request(url).post("/").send(DELETE_USER);
    expect(response.text).not.toContain("errors");
    expect(response.body.data?.deleteUser).not.toBeUndefined();
    expect(response.body.data.deleteUser.id).toBe(userConstants.createUser.username);
  });
});
