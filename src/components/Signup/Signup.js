import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
import SignUpForm from './form';
import { Redirect } from 'react-router-dom';

const SINGUP = gql`
    mutation createUser(
        $firstName: String!,
        $lastName: String!,
        $email:String!,
        $password:String!, 
        ) {
            signup(data: {
                first_name: $first_name
                last_name: $last_name
                email: $email
                password: $password
                profile_image: $profile_image
            }) {
                token
        }
    }
`;


class SignUp extends Component {
    state = {  }
    render() { 
        return (
            <SignUpForm
            />
        );
    }
}
 
export default SignUp;