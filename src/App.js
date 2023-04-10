import React, { useState, useEffect } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {CssBaseline, Grid} from '@material-ui/core'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import Signup from './user/Signup'
import Signin from './user/Signin'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'

import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { getPlacesData } from './api';

export default function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [isAuth, setIsAuth]= useState(false)
  const[user, setUser] = useState({});
  // const [autocomplete, setAutocomplete] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude })

    })
  }, [])

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates, bounds])

  useEffect(()=> {
    let token = localStorage.getItem("token")
    if(token !=null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }

  })

  const registerHandler = (user) =>{
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  const loginHandler = (cred) =>{
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      // save the token into local storage
      let token = res.data.token
      if(token!=null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token);
        setIsAuth(true)
      }
    })
    .catch(err =>{
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)

  }
  
  const navbar = isAuth ?(
    <>
     <Nav.Link> <Link to="/">Home</Link></Nav.Link> &nbsp; 
     <Nav.Link> <Link to="/logout" onClick={onLogOutHandler}>Logout</Link> </Nav.Link>&nbsp;
    </>
  )
  :
  (
    <>
     <Nav.Link><Link to="/signup">Signup</Link></Nav.Link>&nbsp;
     <Nav.Link><Link to="/signin">Signin</Link></Nav.Link> &nbsp;
  </>
  ) 

  // const onLoad = (autoC) => setAutocomplete(autoC)
  // console.log('on', onLoad)
  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat()
  //   const lng = autocomplete.getPlace().geometry.location.lng()
  //   setCoordinates({ lat, lng})
  // }

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
          {navbar}
            </Nav>
          <div>
            <Routes>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler}></Signin>}>
              </Route>
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
            {/* <Autocomplete> */}
            <Button variant="outline-success">Search</Button>
            {/* </Autocomplete> */}
          </Form>
        </div>
      </div>
    </div>
  </div>

  <div>
{/* <<<<<<< HEAD */}
    
{/* ======= */}
    <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places}/>
{/* <<<<<<< HEAD */}
    <Container>
      <List places={places} />
    
    </Container>
    
{/* ======= */}
    {/* <List /> */}
{/* >>>>>>> 0c7fc2216f2a77019a46c40f6be654e8d40f3750
>>>>>>> 962b5966dceb4fa93cac5da2c71da395fad733f1 */}
  </div>

 
  </>

  )
}
