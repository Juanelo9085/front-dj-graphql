import React, { Component, Fragment } from 'react';

import { withRouter } from 'react-router-dom';

import Error from '../Alertas/Error';

import { Mutation } from 'react-apollo';
import { AUTENTICAR_USUARIO } from '../../mutations'
import { async } from 'q';
const initialState = {
    username : '',
    password: ''
}

class Login extends Component {
    state = {
        ...initialState
    }

     actualizarState = e => {
         const { name, value} = e.target;

        this.setState({
            [name] : value
        })
     }


    limpiarState = () => {
         this.setState({...initialState});
    }

    iniciarSesion = (e, tokenAuth) => {
        e.preventDefault();

        tokenAuth().then(async({data}) => {
          //console.log(data.tokenAuth.token)
          const { token } = data.tokenAuth;
          localStorage.setItem("appToken", token);

          //Ejecutar el query una vez se haya iniciado sesión.

          //Limpiar el state
          this.limpiarState();
          this.props.history.push('/');
        })
     
     }

     validarForm = () => {
        const {username, password} = this.state;

        const noValido = !username || !password;

        console.log(noValido);
        return noValido;
     }
    render() { 

        const {username, password} = this.state;
      
        return ( 
            <Fragment>
                 <h1 className="text-center mt-5 mb-5">Iniciar Sesión</h1>
                <div className="row  justify-content-center">

                    <Mutation 
                        mutation={ AUTENTICAR_USUARIO }
                        variables={{username, password}}    
                    >
                    {( tokenAuth, {loading, error, data}) => {

                        return (
                            
                            <form 
                                onSubmit={ e => this.iniciarSesion(e, tokenAuth) } 
                                className="col-md-8"
                            >

                            {error && <Error error={error} />}
                            

                            <div className="form-group">
                                <label>Usuario</label>
                                <input 
                                    onChange={this.actualizarState} 
                                    value={username}
                                    type="text" 
                                    name="username" 
                                    className="form-control" 
                                    placeholder="Nombre Usuario" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    onChange={this.actualizarState} 
                                    value={password}
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                />
                            </div>

                            <button 
                                disabled={ 
                                    loading || this.validarForm()
                                }
                                type="submit" 
                                className="btn btn-success float-right">
                                    Iniciar Sesión
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
 
export default withRouter(Login);