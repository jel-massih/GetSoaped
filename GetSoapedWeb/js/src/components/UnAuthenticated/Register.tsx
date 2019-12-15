import * as React from 'react'

import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col'; 

import { RouteComponentProps, Link } from "@reach/router"

interface RegisterProps extends RouteComponentProps {
};

export const Register = (props: RegisterProps) => {
    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
                <Card>
                    <Card.Body className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group className="row">
                                <Col>
                                    <Form.Control placeholder="First Name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="userEmail">
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="row">
                                <Col>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                                <Col>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" onClick={() => {}} type="submit" block className="rounded">Register Account</Button>
                        </Form>
                        <hr />
                        <div className="text-center">
                            <Link to="/resetPassword">Forgot Password</Link>
                        </div>
                        <div className="text-center">
                            <Link to="/login">Already have an Account? Login!</Link>
                        </div>
                    </Card.Body>
            </Card>
        </div>
      </div>
    );
}