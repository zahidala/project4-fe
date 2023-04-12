import React, { useEffect, useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import './PlanCreateForm';
import ViewDetails from '../ViewDetails/ViewDetails'
import { Place } from "@material-ui/icons";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Signin from '../../user/Signin'
import jwt_decode from 'jwt-decode';
// take the id from the API
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/get-details';

const fetchPlaceData = async (id) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        location_id: id,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function PlanCreateForm(props) {
  const [newPlan, setNewPlan] = useState({});
  // user
  const [newUser, setNewUser]= useState({});
  // const changeHandler = (e) =>{
  //     const user = {...newUser}
  //     user[e.target.id] = e.target.value
  //     setNewUser(user)
  //     console.log('check')
  //     console.log(user)
  // }

  const [isAuth, setIsAuth]= useState(false)
  const[user, setUser] = useState({});

 // To go to Calender
  const navigate = useNavigate()
  const toMyTravels = (event) => {
    let id = event.currentTarget.id
    console.log('location id')
    console.log(id)
    const user = {...newUser}
    user[event.target.id] = event.target.value
    setNewUser(user)
    console.log('check')
    console.log(user)
    
    
    navigate(`/calendar/${place.location_id}` )
  }
  
const id = useParams().id;
const [place, setPlace] = useState(null);
const [loading, setLoading] = useState(true);
// console.log("ID- here", id)


  useEffect(() => {
    console.log("ID", id)
    const fetchPlace = async () => {
      const data = await fetchPlaceData(id);
      setPlace(data);
      setLoading(false);
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
    };

    fetchPlace();
    
    
  }, [id]);

  // for grabing location id
  // const navigate = useNavigate()
  // To go to plan form
//   const printForm = (event) => {
//     let id = event.currentTarget.id
//     console.log(id)
//     // navigate(`/plan/` )
//   }
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>Place not found</div>;
  }




  // Handle changes in input fields
  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const plan = { ...newPlan };
    plan[attributeToChange] = newValue;
    console.log(plan);
    setNewPlan(plan);
  };

  // Handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.addPlan(newPlan);
  // };

  // console.log("id:"+user._id)

  return (
    <div>
      <h1>Add a Plan</h1>
      <Container>
        {/* Name input field */}
        <Form.Group>
          <Form.Label>Name {place.name}</Form.Label>
        </Form.Group>

        {/* Description input field */}
        <Form.Group>
          <Form.Label>Category {place.category.name}</Form.Label>
        </Form.Group>

        {/* Start Date input field */}
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        {/* End Date input field */}
        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

      <input type="hidden" name="user" value={user._id}/>

        {/* Add plan button */}
        <Button variant="primary" onClick={toMyTravels}>
          Add plan
        </Button>
      </Container>
    </div>
  );
}