import { DB } from "./db.interfaces";
import { User } from "./user.interfaces";

export interface ServerContext {
  repositories: {
    UserRepository: DB<User>;
  };
}
