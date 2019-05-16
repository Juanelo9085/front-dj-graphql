import gql from 'graphql-tag'

export const CREAR_USUARIO = gql `
    mutation createUser(
        $username: String!,
        $firstName: String!,
        $lastName: String!,
        $email:String!,
        $password:String!
        ) {
          createUser(data: {
            username: $username
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
          }) {
            id
            username
            firstName
            lastName
            email
        }
    }
`;