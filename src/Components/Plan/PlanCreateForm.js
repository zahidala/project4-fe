import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'


export default function PlanCreateForm(props) {
    const [newPlan, setNewPlan] = useState({})
    const handleChange = (event) =>{
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const plan = {...newPlan}
        plan[attributeToChange] = newValue
        console.log(plan)
        setNewPlan(plan)
    }
    const handleSubmit = (event =>{
        event.preventDefault();
        props.addPlan(newPlan)
    })
  return (
    <div>
        <h1>Add a Plan </h1>

        <Container>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name='description' onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type='date' name="startDate" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" name="endDate"  onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button varient='primary' onClick={handleSubmit}>Add plan</Button>
        </Container>

    </div>
  )
}







