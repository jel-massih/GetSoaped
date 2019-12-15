import * as React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';

export const SignInMenu = () => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [userName, setUserName] = React.useState(null);

    React.useEffect(() => {
        const authSubscription = authService.subscribe(() => populateState);

        return () => {
            authService.unsubscribe(authSubscription);
        }
    });

    const populateState = async () => {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()]);

        setIsAuthenticated(isAuthenticated);
        setUserName(user && user.name);
    }

    const anonymousView = (registerPath: string, loginPath: string) => {
        return (<React.Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={registerPath}>Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}>Login</NavLink>
            </NavItem>
        </React.Fragment>);
    }

    const authenticatedView = (userName: string, profilePath: string, logoutPath: object) => {
        return (<React.Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={profilePath}>Hello {userName}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={logoutPath}>Logout</NavLink>
            </NavItem>
        </React.Fragment>);

    }

    if (!isAuthenticated) {
        const registerPath = `${ApplicationPaths.Register}`;
        const loginPath = `${ApplicationPaths.Login}`;
        return anonymousView(registerPath, loginPath);
    } else {
        const profilePath = `${ApplicationPaths.Profile}`;
        const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
        return authenticatedView(userName, profilePath, logoutPath);
    }
}
