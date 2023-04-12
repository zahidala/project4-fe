import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getWeatherData } from './api';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header/Header';
import Signup from './user/Signup';
import Signin from './user/Signin';
import MyCalendar from './Components/Plan/MyCalendar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import PlanCreateForm from './Components/Plan/PlanCreateForm';
import ReviewCreateForm from './Components/reviews/ReviewCreateForm';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import logo from './travel-buddy.png'

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

  }, []);

  const navigate = useNavigate();

  // registerHandler function for handling registration
  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // loginHandler function for handling login
  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(res => {
        console.log(res.data.token);
        // save the token into local storage
        let token = res.data.token;
        if (token != null) {
          localStorage.setItem("token", token);
          let user = jwt_decode(token);
          setIsAuth(true);
          setUser(user);
          navigate("/");
        }
      })
      .catch(err => {
        console.log(err);
        setIsAuth(false);
      });
  };

  // onLogOutHandler function for handling logout
  const onLogOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    navigate("/");

  };

  // navbar with conditional rendering based on authentication
  const navbar = isAuth ? (
    <>
     {/* <Link className="my-navbar" to="/">Home</Link> &nbsp;  */}
     <Link className="my-navbar" to="/header">Explore</Link> &nbsp; 
     <Link className="my-navbar" to="/calendar">MyCalendar</Link> &nbsp; 
     {/* <Link className="my-navbar" to="/plan">Plan</Link> &nbsp;  */}
     {/* <Link className="my-navbar" to="/review">Review</Link> &nbsp;  */}
     <Link className="my-navbar" to="/logout" onClick={onLogOutHandler}>Logout</Link>&nbsp;
     
    </>
  )
  :
  (
    <>
     <Link className="my-navbar" to="/signup">Signup</Link>&nbsp;
     <Link className="my-navbar" to="/signin">Signin</Link> &nbsp;
     
  </>
  ) 

  // const [type, setType] = useState('restaurants');
  // const [rating, setRating] = useState('');

  // const [coords, setCoords] = useState({});
  // const [bounds, setBounds] = useState(null);

  // const [weatherData, setWeatherData] = useState([]);
  // const [filteredPlaces, setFilteredPlaces] = useState([]);
  // const [places, setPlaces] = useState([]);

  // const [autocomplete, setAutocomplete] = useState(null);
  // const [childClicked, setChildClicked] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const onLoad = (autoC) => setAutocomplete(autoC);

  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat();
  //   const lng = autocomplete.getPlace().geometry.location.lng();

  //   setCoords({ lat, lng });
  // };

  return (
    <>
    {/* <Router> */}
    <Navbar  expand="lg" className='color-nav'>
      <Container fluid>
      <Link className="my-navbar" to="/"><Navbar.Brand><img src={logo} className='logo' /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarscroll" />
        <Navbar.Collapse id="navbarscroll">
          <nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarscroll="true">
          {navbar}
          </nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <div>
            <Routes>
              {/* <Route path="/" element={ <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />}></Route> */}
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler}/>}></Route>
              <Route exact path="/calendar/:id" element={<MyCalendar/>}></Route>
              <Route exact path="/plan/:id" element={<PlanCreateForm/>}></Route>
              <Route path="/review" element={<ReviewCreateForm/>}></Route>
              <Route path="/header" element={<Header />}></Route>
              <Route exact path='/viewdetails/:id' element={<ViewDetails/>}></Route>

            </Routes>            
          </div>
        {/* </Router> */}

        <CssBaseline />
     
      {/* <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid> */}
    </>
  )
}