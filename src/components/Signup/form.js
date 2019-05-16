import React, { Component } from 'react';
import classNames from 'classnames';

class SignUpForm extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <h1 className="text-center mb-5">Crear cuenta</h1>
        <div className="row  justify-content-center">
          <form className="col-md-8">
            <div className="form-group">
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    className="form-control" 
                    placeholder="Nombre" 
                />
            </div>
            <div className="form-group">
                <label>Apellidos</label>
                <input 
                    type="text" 
                    name="apellidos" 
                    className="form-control" 
                    placeholder="Apellidos" 
                />
            </div>
            <div className="form-group">
                <label>Correo electrónico</label>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="Correo electrónico" 
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder="Contraseña"
                />
            </div>
            <div className="form-group">
                <label>Repetir Contraseña</label>
                <input 
                    type="password" 
                    name="repetirPassword" 
                    className="form-control" 
                    placeholder="Repetir Contraseña" 
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-success float-right">
                    Crear cuenta
            </button>
          </form>
        </div>
      </React.Fragment>
      
    );
  }
}
 
export default SignUpForm;