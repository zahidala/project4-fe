import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './PlanCreateForm';

export default function PlanCreateForm(props) {
  const [newPlan, setNewPlan] = useState({});

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
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange}></Form.Control>
        </Form.Group>

        {/* Description input field */}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onChange={handleChange}
          ></Form.Control>
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
        <Button variant="primary" onClick={handleSubmit}>
          Add plan
        </Button>
      </Container>
    </div>
  );
}
