import React from 'react';
import { Route } from 'react-router-dom';

//import { Login } from '../components/Login';
import Registro  from '../components/Auth/Registro';
//import { Posts, PostDetail } from '../components/Posts';
//import { UserDetail } from '../components/Users';
//import isAuthenticated from '../isAuthenticated';

/*
const Logout = () => {
    localStorage.removeItem("appToken");
    return <Redirect to="/login" />
}
*/
const NoMatch = () => (
    <div>
      no match
    </div>
  );
  
  /* Las rutas privadas se muestran solamente cuando se tiene el token */
  /*
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route  {...rest} render={
        (props) => (
            isAuthenticated() 
                ? <Component {...props} /> 
                : <Redirect to="/login" />
        )
    }>
    </Route>
)
*/
export default [
    <Route exact path="/registro" component={Registro} />,
    /*
    <Route exact path="/login" component={Login} />,
    <Route exact path="/logout" component={Logout} />,
    
    <Route component={NoMatch} />,
    <PrivateRoute exact path="/" component={Posts}/>,
    <PrivateRoute exact path="/posts/:id" component={PostDetail}/>,
    <PrivateRoute exact path="/users/:id" component={UserDetail}/>,
*/
]