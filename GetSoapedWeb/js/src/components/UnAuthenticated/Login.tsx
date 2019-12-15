import * as React from 'react'

import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

import { RouteComponentProps, Link } from "@reach/router"

interface LoginProps extends RouteComponentProps {
};

export const Login = (props: LoginProps) => {
    return (
        <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-9">
                <Card>
                    <Card.Body className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <Form>
                            <Form.Group controlId="userEmail">
                                <Form.Control type="email" placeholder="Enter Email Address..." />
                            </Form.Group>
                            <Form.Group controlId="userPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="userRememberMe">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>

                            <Button variant="primary" type="submit" block className="rounded">Login</Button>
                        </Form>
                        <hr />
                        <div className="text-center">
                            <Link to="/resetPassword">Forgot Password</Link>
                        </div>
                        <div className="text-center">
                            <Link to="/register">Create an Account!</Link>
                        </div>
                    </Card.Body>
            </Card>
        </div>
      </div>
    );
}