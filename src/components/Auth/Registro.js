import React, { Component, Fragment } from 'react';
import {Mutation} from 'react-apollo';
import { CREAR_USUARIO} from '../../mutations';
import Error from '../Alertas/Error';

import {withRouter} from 'react-router-dom';
const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repetirPassword: '',
}

class Registro extends Component {
  state = {
    ...initialState
  }

  limpiarState = () => {
    this.setState({...initialState})
  }

  crearRegistro = (e, createUser) =>{
    e.preventDefault();
    //console.log('Creando registro ...')
    createUser().then(data => {
      console.log(data);
      this.limpiarState(); //Setea valores iniciales
      this.props.history.push('/login'); // Redirecciona a Login (puede ser otra página)
    })

  }
  
  actualizarState = e =>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  validarForm = () => {
    const {username, firstName, lastName, email, password, repetirPassword} = this.state;
    const noValido = !username || !firstName || !email || !password || password!==repetirPassword;
    return noValido;
  }


  render() { 
    const {username, firstName, lastName, email, password, repetirPassword} = this.state;

    return (
      <Fragment>
        <h1 className="text-center mt-5 mb-5">Crear cuenta</h1>
        <div className="row  justify-content-center">
          <Mutation
            mutation={CREAR_USUARIO}
            variables={{username, firstName, lastName, email, password}}
          >
          {(createUser,{loading, error, data}) => {
            return(
              <form className="col-md-8"
                    onSubmit={ e => this.crearRegistro(e, createUser)}
              >
                {error && <Error error={error} />}
                <div className="form-group">
                    <label>Usuario</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Usuario"
                        value={username}
                    />
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Nombre"
                        value={firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Apellidos"
                        value={lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input 
                        onChange={this.actualizarState}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        onChange={this.actualizarState}
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <label>Repetir Contraseña</label>
                    <input 
                        onChange={this.actualizarState}
                        type="password"
                        name="repetirPassword"
                        className="form-control"
                        placeholder="Repetir Contraseña"
                        value={repetirPassword}
                    />
                </div>

                <button 
                    disabled={loading || this.validarForm()}
                    type="submit" 
                    className="btn btn-success float-right">
                        Crear cuenta
                </button>
              </form>
            )
          }}
          </Mutation>
          
          
        </div>
      </Fragment>
    );
  }
}
 
//export default Registro;
export default withRouter(Registro);