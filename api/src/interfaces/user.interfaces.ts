export interface User {
  username: string;
  name: string;
}

export interface UserQuery {
  input: {
    username: string;
  };
}

export interface UsersQuery {
  input: Partial<User>;
}

export interface UserDb {
  [username: string]: User;
}

export interface UserCreateMutation {
  input: {
    username: string;
    name: string;
  };
}

export interface UserUpdateMutation {
  id: string;
  input: {
    name: string;
  };
}

export interface UserDeleteMutation {
  id: string;
}
