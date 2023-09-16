const newUser = {
  username: "zee",
  name: "Zeeshan",
  newName: "Shani",
};

export const userConstants = {
  createUser: { username: newUser.username, name: newUser.name },
  updateUser: { username: newUser.username, input: { name: newUser.newName } },
  fetchUser: { username: newUser.username },
};

interface gqlRequestData {
  query: string;
  variables: object;
}

const createUserMutation = `#graphql
mutation($input: UserCreateInput!) {
  createUser(input: $input) {
    name
    username
  }
}
`;
export const CREATE_USER: gqlRequestData = {
  query: createUserMutation,
  variables: {
    input: userConstants.createUser,
  },
};

const updateUserMutation = `#graphql
mutation updateUser($id: String!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    username
    name
  }
}
`;

export const UPDATE_USER: gqlRequestData = {
  query: updateUserMutation,
  variables: {
    id: userConstants.updateUser.username,
    input: userConstants.updateUser.input,
  },
};

const fetchUserQuery = `#graphql
query getUser($input: UserQueryInput) {
  user(input: $input) {
    name
    username
  }
}
`;
export const FETCH_USER: gqlRequestData = {
  query: fetchUserQuery,
  variables: { input: userConstants.fetchUser },
};

const fetchUsersQuery = `#graphql
query getUser($input: UsersQueryInput) {
  users(input: $input) {
    name
    username
  }
}
`;
export const FETCH_USERS: gqlRequestData = {
  query: fetchUsersQuery,
  variables: { input: {} },
};

const deleteUserMutation = `#graphql
mutation($id: String!) {
  deleteUser(id: $id) {
    id
  }
}
`;
export const DELETE_USER: gqlRequestData = {
  query: deleteUserMutation,
  variables: { id: userConstants.createUser.username },
};
