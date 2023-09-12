import { userResolvers } from "./user.resolvers";
import { healthResolvers } from "./health.resolvers";

const resolvers = [healthResolvers, userResolvers];

export { resolvers };
