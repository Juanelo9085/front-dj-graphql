import gql from 'graphql-tag'

export const SERVICE_PROVIDERS = gql `
  query{
    getProviders{
      id
      firstName
      lastName
      phone
    }
  }
`;
