import React from 'react';
import {Query} from 'react-apollo'
import loader from '../common/loading.gif';

import {SERVICE_PROVIDERS} from '../queries';

const ServiceProviders = () => (
  <Query query={SERVICE_PROVIDERS}>
    {({loading, error, data}) => {
      if(loading) return <img src={loader}/>
      if(error) return `Error: ${error.message}`;
      console.log(data);
      return(
        <React.Fragment>
          <h3 className="text-center mt-4">Proveedores de acuerdo a la busqueda indicada</h3>
          <ul className="list-group mt-4">
            {data.getProviders.map(provider => (
              <li key={provider.id} className="list-group-item">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-8 d-flex justify-content-between align-items-center">
                    {provider.firstName} {provider.lastName}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )
    }}
  </Query>
)

export default ServiceProviders;