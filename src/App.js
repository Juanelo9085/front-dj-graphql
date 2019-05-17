import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Importar configuración de rutas
import routes from './config/routes';
// Importar componentes
import { Navbar as NavbarComponent } from './common/Navbar';
import ServiceProviders from './components/ServiceProviders'


const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  onError: ({networkError, GraphQLErrors}) => {
    console.log('GraphQLError',GraphQLErrors);
    console.log('networkError',networkError);
  }
});


class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <NavbarComponent />
            <Switch>
              { routes }
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
