import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'

export default function Signin(props) {
    const [newUser, setNewUser]= useState({});
    const changeHandler = (e) =>{
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)

    }

    const loginHandler = () =>{
        props.login(newUser)
    }
  return (
    <div>
        <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center ">
          <Col md={8} lg={6} xs={12}>
          {/* <div className="border border-2 border-primary "></div> */}
            <Card className="shadow px-4 ">
              <Card.Body>
                <div className="mb-3 mt-md-4 ">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Sign In</h2>
                  <div className="mb-3">
                    <Form>
        
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="emailAddress" onChange={changeHandler} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={changeHandler} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button className="button" onClick={loginHandler}>Login</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      You Don't have an account??{" "}
                        <a href="{'/signup'}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
