import { UserDb } from "../interfaces/user.interfaces";

export const defaultUsers: UserDb = {
  user1: {
    username: "user1",
    name: "Test User 1 Name",
  },
  user2: {
    name: "Test User 2 Name",
    username: "user1",
  },
};
