import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import loader from '../../common/loading.gif';
import BuscarServiceProvider from './BuscarServiceProvider'

import {SERVICE_PROVIDERS} from '../../queries';
class Providers extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <div className="col-md-9">
        <Query query={SERVICE_PROVIDERS}>
          {({loading, error, data})=> {
            if(loading) return <img src={loader}/>
            if(error) return `Error: ${error.message}`;

            console.log(data);

            return(
              <BuscarServiceProvider
                proveedores={data.getProviders}
              />
            )
          }}
        </Query>
        </div>
      </Fragment>
    );
  }
}
 
export default Providers;