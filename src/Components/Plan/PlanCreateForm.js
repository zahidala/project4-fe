import React, { useEffect, useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import './PlanCreateForm';
import ViewDetails from '../ViewDetails/ViewDetails'
import { Place } from "@material-ui/icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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

  // for grabing location id
  const navigate = useNavigate()
  // To go to plan form
  const toMyTravels = (event) => {
    let id = event.currentTarget.id
    console.log(id)
    navigate(`/calendar/${place.location_id}` )
  }
  
  const id = useParams().id;
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      const data = await fetchPlaceData(id);
      setPlace(data);
      setLoading(false);
    };

    fetchPlace();
  }, [id]);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPlan(newPlan);
  };

  return (
    <div>
      <h1>Add a Plan</h1>
      <Container>
        {/* Name input field */}
        
        <Form.Group>
          <Form.Label>Name {place.name}</Form.Label>
          {/* <Form.Control name="name" onChange={handleChange}></Form.Control> */}
        </Form.Group>

        {/* Description input field */}
        <Form.Group>
          <Form.Label>Category {place.category.name}</Form.Label>
          {/* <Form.Control name="description"onChange={handleChange}></Form.Control> */}
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

        {/* Add plan button */}
        <Button variant="primary" onClick={toMyTravels}>
          Add plan
        </Button>
      </Container>
    </div>
  );
}
