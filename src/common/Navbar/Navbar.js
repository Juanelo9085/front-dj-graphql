import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';

class Navbar extends Component {
    constructor() {
        super();
        this.state = { 
            authenticated: localStorage.getItem('appToken') !== null
         }
    }

    authenticatedRender = () => {
        if(isAuthenticated()){
            return(
                NavegacionAutenticado()
            );
        } else {
            return (
                NavegacionNoAutenticado()
            );
        }
    }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Mis oficios</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navegacion">
                {
                    this.authenticatedRender()
                }
                </div>
            </nav>
         );
    }
}

const NavegacionNoAutenticado = () => (
    <ul className="navbar-nav ml-auto text-right">
        <li className="nav-item active">
            <Link to="/registro" className="nav-link" >
                Crear cuenta <span className="sr-only">(current)</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className="nav-link">
                Iniciar sesión
            </Link>
        </li>
    </ul>
);

const NavegacionAutenticado = () => (
    <ul className="navbar-nav ml-auto text-right">
        <li className="nav-item active">
            <Link className="nav-link" to={`/users/${payload()._id}`}>
                Bienvenido {payload().first_name}
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/logout" className="nav-link">
                Cerrar sesión
            </Link>
        </li>
    </ul>
);

export default Navbar;