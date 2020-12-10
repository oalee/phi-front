import { gql } from "@apollo/client";

const LOGIN = gql`
  query Query($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      token
    }
  }
`;

const GETUSERS = gql`
  query Query {
    users {
      id
      username
      createdAt
      updatedAt
    }
  }
`;

export { LOGIN, GETUSERS };
