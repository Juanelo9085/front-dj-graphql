import React, {Fragment} from 'react';
import Proveedor from './Proveedor'

const Detalle = (props) => {

  const proveedores = props.proveedores;

  if(proveedores.length === 0) return null

  return(
    <Fragment>
      <h3 className="text-center my-5">Resultado de la busqueda</h3>
      <table className="table">
        <thead className="bg-success text-light">
          <tr className="font-weight-bold">
            <th>Nombre proveedor</th>
            <th>Teléfono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor, index) => (
            <Proveedor
              key={proveedor.id}
              id={proveedor.id}
              proveedor={proveedor}
              index={index}
            />
          ))}
        </tbody>

      </table>
    </Fragment>
  );
}

export default Detalle;