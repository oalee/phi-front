import { gql } from "@apollo/client";

const LOGIN = gql`
  query Query($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      token
    }
  }
`;

const GETME = gql`
  query Query($verifyTokenToken: String!) {
    verifyToken(token: $verifyTokenToken) {
      id
      username
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

export { LOGIN, GETUSERS, GETME };
