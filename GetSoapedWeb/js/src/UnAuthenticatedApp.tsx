import * as React from "react";

import { Router, Link } from '@reach/router';

import { UnAuthenticatedHome } from './components/UnAuthenticated/UnAuthenticatedHome';
import { Login } from './components/UnAuthenticated/Login';
import { Register } from './components/UnAuthenticated/Register';

export default () => {
    return(
        <Router>
            <UnAuthenticatedHome path="/" />
            <Login path="login" />
            <Register path="register" />
        </Router>
    );
}