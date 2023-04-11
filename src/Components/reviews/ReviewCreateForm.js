import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import './review.css'


export default function ReviewCreateForm(props) {
    const [newReview, setNewReview] = useState({})
    const handleChange = (event) =>{
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const review = {...newReview}
        review[attributeToChange] = newValue
        setNewReview(review)
    }
    const handleSubmit = (event =>{
        event.preventDefault();
        props.addReview(newReview)
    })
  return (
    <div>
        <h1>Add a Review </h1>

        <Container className='review'>
            <Form.Group>
                <Form.Control className='form-control' name='review' onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button className='btn' varient='primary' onClick={handleSubmit}>Add review</Button>
        </Container>

    </div>
  )
}







