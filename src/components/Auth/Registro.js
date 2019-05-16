import React, { Component, Fragment } from 'react';
import {Mutation} from 'react-apollo';
import { CREAR_USUARIO} from '../../mutations';

const initialState = {
  usuario:'',
  nombre:'',
  apellidos:'',
  email:'',
  password:'',
  repetirPassword:'',
}

class Registro extends Component {
  state = {
    ...initialState
  }

  crearRegistro = (e, createUser) =>{
    e.preventDefault();
    console.log('Creando registro ...')

    createUser().then(data => {
      console.log(data);
    })

  }
  
  actualizarState = e =>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  validarForm = () => {
    const {usuario, nombre, apellidos, email, password, repetirPassword} = this.state;

    const noValido = !usuario || !nombre || !email || !password || password!==repetirPassword;

    return noValido;
  }


  render() { 
    const {usuario, nombre, apellidos, email, password} = this.state;

    return (
      <Fragment>
        <h1 className="text-center mb-5">Crear cuenta</h1>
        <div className="row  justify-content-center">
          <Mutation
            mutation={CREAR_USUARIO}
            variables={{usuario, nombre, apellidos, email, password}}
          >
          {(createUser,{loading, error, data}) => {
            return(
              <form className="col-md-8"
                    onSubmit={ e => this.crearRegistro(e, createUser)}
              >
                <div className="form-group">
                    <label>Usuario</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text" 
                        name="usuario" 
                        className="form-control" 
                        placeholder="Usuario" 
                    />
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text" 
                        name="nombre" 
                        className="form-control" 
                        placeholder="Nombre" 
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input 
                        onChange={this.actualizarState}
                        type="text" 
                        name="apellidos" 
                        className="form-control" 
                        placeholder="Apellidos" 
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
                    />
                </div>

                <button 
                    disabled={this.validarForm()}
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
 
export default Registro;