import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import Signup from './user/Signup'
import Signin from './user/Signin'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'

import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";


export default function App() {
  const [isAuth, setIsAuth]= useState(false)
  const[user, setUser] = useState({});

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
        setUser(user)
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
     <Link to="/">Home</Link> &nbsp; 
     <Link to="/logout" onClick={onLogOutHandler}>Logout</Link>&nbsp;
    </>
  )
  :
  (
    <>
     <Link to="/signup">Signup</Link>&nbsp;
     <Link to="/signin">Signin</Link> &nbsp;
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
    <>
    <Router>
    <Navbar  expand="lg" className='color-nav'>
      <Container fluid>
      <Link to="/"><Navbar.Brand>Trip Planner</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      
        
          
          <nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          {navbar}
          </nav>

        
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <div>
            <Routes>
              <Route path="/" element={<Header />}></Route>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler}/>}></Route>
            </Routes>            
          </div>
        </Router>
        </>

       
  )
}
