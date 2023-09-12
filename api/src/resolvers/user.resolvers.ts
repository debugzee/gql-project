import {
  UserQuery,
  UsersQuery,
  User,
  UserCreateMutation,
  UserUpdateMutation,
  UserDeleteMutation,
} from "../interfaces/user.interfaces";
import { ServerContext } from "../interfaces/global.interfaces";

const userResolvers = {
  Query: {
    async user(parent: undefined, args: UserQuery, ctx: ServerContext): Promise<User | Error> {
      return await ctx.repositories.UserRepository.findById(args.input.username);
    },
    async users(parent: undefined, args: UsersQuery, ctx: ServerContext): Promise<User[] | Error> {
      return await ctx.repositories.UserRepository.findMany(args.input);
    },
  },
  Mutation: {
    async createUser(parent: undefined, args: UserCreateMutation, ctx: ServerContext): Promise<User | Error> {
      return await ctx.repositories.UserRepository.create(args.input);
    },
    async updateUser(parent: undefined, args: UserUpdateMutation, ctx: ServerContext): Promise<User | Error> {
      return await ctx.repositories.UserRepository.update(args.id, args.input);
    },
    async deleteUser(parent: undefined, args: UserDeleteMutation, ctx: ServerContext): Promise<{ id: string } | Error> {
      console.log(args);
      return await ctx.repositories.UserRepository.delete(args.id);
    },
  },
};

export { userResolvers };
