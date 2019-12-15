import * as React from 'react'

import Button from 'react-bootstrap/Button';

import { RouteComponentProps, navigate } from "@reach/router"

import { Logo } from '../Shared/Logo';

interface UnAuthenticatedHomeProps extends RouteComponentProps {
};

export const UnAuthenticatedHome = (props: UnAuthenticatedHomeProps) => {
    const onLoginClick = () => {

    }

    const onRegisterClick = () => {

    }

    return (
        <div>
            <div className="row justify-content-center">
                <Logo width={100} height={100} />
            </div>
            <div className="row justify-content-center">
                <h1>Get Soaped</h1>
            </div>
            <div className="row justify-content-center">
                <Button variant="primary" className="mr-1" onClick={() => navigate('login')}>Login</Button>
                <Button variant="secondary" onClick={() => navigate('register')}>Register</Button>
            </div>
        </div>
    );
}