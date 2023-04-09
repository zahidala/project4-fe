import React, { useState, useEffect } from 'react'

import {CssBaseline, Grid} from '@material-ui/core'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { getPlacesData } from './api';

export default function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlacesData()
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [])

  return (
    
    // <>
    //   <CssBaseline>
    //      <Header /> 
    //   <Grid container spacing={3} style={{ width: '100%' }}>
    //     <Grid item xs={12} md={4}>
    //       <List />
    //     </Grid>
    //     <Grid item xs={12} md={8}>
    //       <Map />
    //     </Grid>
    //   </Grid>
    //   </CssBaseline>
    // </>

  <>
    <Navbar  expand="lg" className='color-nav'>
      <Container fluid>
      <Navbar.Brand href="#">Trip Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      
        <Router>
          
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            
              <Nav.Link to='/'>Home</Nav.Link>
              <Nav.Link to="/signup">Sign Up </Nav.Link>
              <Nav.Link to="/signin">Sign In</Nav.Link>
              <Nav.Link to="/logout" >Sign Out</Nav.Link>
            
            </Nav>
          <div>
            <Routes>
              <Route path="/" ></Route>
              <Route path="/signup" ></Route>
              <Route path="/signin" ></Route>
            </Routes>
          </div>

        </Router>
        </Navbar.Collapse>
        </Container>
        </Navbar>

        
  <div id="intro" class="bg-image">
    <div class="mask text-white">
      <div class="container d-flex align-items-center text-center h-100">
        <div>
          <p>Plan you next trip with us!</p>
        </div>
        <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>

  <div>
    <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
    <List />
  </div>

 
  </>

  )
}
