import gql from 'graphql-tag'

export const CREAR_USUARIO = gql `
mutation createUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
	createUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    user{
      id
      username
      firstName
      lastName
      email
      password
    }
  }
}

`;

export const AUTENTICAR_USUARIO = gql `
mutation tokenAuth($username: String!, $password: String!) {
	tokenAuth(username: $username, password: $password){
    token
  }
}
`