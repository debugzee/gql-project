import { User, UserDb } from "../interfaces/user.interfaces";
import { DB } from "../interfaces/db.interfaces";
import { defaultUsers } from "./defaults";

const users: UserDb = defaultUsers;

export const UserRepository: DB<User> = {
  create(args: User): Promise<User | Error> {
    return new Promise((resolve, reject) => {
      try {
        if (args.username in users) {
          throw new Error("User already exists");
        } else {
          users[args.username] = args;
          resolve(args);
        }
      } catch (e) {
        reject(new Error(`Unable to create user. ${e}`));
      }
    });
  },

  update(id: string, args: Partial<User>): Promise<User | Error> {
    return new Promise((resolve, reject) => {
      try {
        if (id in users) {
          // Todo restrict update of username in schema
          users[id] = { ...users[id], ...args };
          resolve(users[id]);
        } else {
          throw new Error("User does not exists");
        }
      } catch (e) {
        reject(new Error(`Unable to update user. ${e}`));
      }
    });
  },

  delete(id: string): Promise<Error | { id: string }> {
    return new Promise((resolve, reject) => {
      try {
        if (id in users) {
          delete users[id];
          resolve({ id });
        } else {
          throw new Error("User does not exists");
        }
      } catch (e) {
        reject(new Error(`Unable to delete user. ${e}`));
      }
    });
  },

  findById(id: string): Promise<User | Error> {
    return new Promise((resolve, reject) => {
      try {
        if (id in users) {
          resolve(users[id]);
        } else {
          throw new Error("User does not exists");
        }
      } catch (e) {
        reject(new Error(`Unable to fetch user. ${e}`));
      }
    });
  },

  findMany(args: Partial<User> = {}): Promise<Error | User[]> {
    return new Promise((resolve, reject) => {
      try {
        const filteredUsers = Object.values(users).filter((user: User) => {
          return Object.keys(args).every((arg) => {
            return arg in user && user[arg as keyof User] === args[arg as keyof User];
          });
        });
        return resolve(filteredUsers);
      } catch (e) {
        reject(new Error(`Unable to fetch users. ${e}`));
      }
    });
  },
};
