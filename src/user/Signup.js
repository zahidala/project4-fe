import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'

export default function Signup(props) {
    const [newUser, setNewUser]= useState({});
    const changeHandler = (e) =>{
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)

    }

    const registerHandler = () =>{
        props.register(newUser)
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
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Sign Up</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={changeHandler}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" name="lastName" onChange={changeHandler} />
                      </Form.Group>

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
                        <Button className="button" variant="primary" onClick={registerHandler}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="{'/signin'}" className="text-primary fw-bold">
                          Sign In
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
        {/* <Container>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Button variant='primary' onClick={registerHandler}>Register</Button>
        </Container> */}
    </div>
  )
}

