import React from 'react';
import { Route, Redirect } from "react-router-dom";
import  { isLoggedIn } from "../src/util";


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={isLoggedIn() ?
                <Component  />
                :
                <Redirect to="/home" />
            }
        />
    )
}

export default PrivateRoute;