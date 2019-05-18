import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Proveedor extends Component {
  state = {  }
  render() {
    const {proveedor} = this.props;
    console.log(proveedor);
    return (
      <Fragment>
        <tr>
          <td>{proveedor.firstName} {proveedor.lastName}</td>
          <td>{proveedor.phone}</td>
          <td>

            <Link to="/registro">
            <button 
                type="button"
                className="btn btn-primary font-weight-bold"
              > Ver detalle</button>
            </Link>
          </td>
        </tr>
      </Fragment>
    );
  }
}
 
export default Proveedor;