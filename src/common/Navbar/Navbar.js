import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Mis oficios</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navegacion">
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
    </div>
    </nav>
);

export default Navbar;