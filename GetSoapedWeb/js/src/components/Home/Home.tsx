import * as React from 'react';

import { Container, Jumbotron, Button } from 'reactstrap';

export const Home = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>Get Soaped</h1>
                <p>OAuth/OpenID Connect Demo using Angular, ASP.NET Core and IdentityServer 4</p>
                <Button to="/register" color="primary" size="lg">Signup &raquo;</Button>
                <Button to="/login" color="primary" size="lg" className="ml-4">Login &raquo;</Button>
                <Button to="/topsecret" color="primary" size="lg" className="ml-4">Top Secret Area &raquo;</Button>
            </Jumbotron>
        </Container>
    );
}
