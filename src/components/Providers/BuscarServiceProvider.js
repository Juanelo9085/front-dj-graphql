import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';

import Detalle from './Detalle'

class BuscarServiceProvider extends Component { 
  state = { 
    proveedores:[]
   }

  seleccionarProveedor = (proveedores) => {
    //console.log('seleccionaste algun proveedor')
    this.setState({
      proveedores
    })

  }

  render() { 
    return (
      <Fragment>
        <h4 className="text-center mt-5 mb-3">Encuentra al personal ideal</h4>
        <Select
          onChange={this.seleccionarProveedor}
          options={this.props.proveedores}
          isMulti={true}
          components={Animated()}
          placeholder={'Buscar un servicio o proveedor'}
          getOptionValue={(options) => options.id}
          getOptionLabel={(options) => options.firstName}
        />
        <Detalle
          proveedores={this.state.proveedores}
        />
      </Fragment>
      
     );
  }
}
 
export default BuscarServiceProvider;