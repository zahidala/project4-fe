import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Chip } from '@material-ui/core'
import {BrowserRouter as Router,Routes,Route, Link, useNavigate} from 'react-router-dom'
import ViewDetails from '../ViewDetails/ViewDetails'

export default function PlaceDetails({ place, selected, refProp }) {
  console.log(place)


  const navigate = useNavigate()

  // To view the details of each place
  const navigateToDetails = (event) => {
    let id = event.currentTarget.id
    console.log(id)
    navigate(`/viewdetails/${place.location_id}` )
  }


  // const navigateToDetails = ()  =>{
  //   navigate(`/viewdetails/${place.location_id}`)
  // }
  

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <Card elevation={6}>
      <Card.Img style={{ height: 350 }} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}/>
      <Card.Title>{place.name}</Card.Title>
      <Card.Body>
        <Card.Text>Price</Card.Text>
        <Card.Text>{place.price_level}</Card.Text>
        <Card.Text>Ranking</Card.Text>
        <Card.Text>{place.ranking}</Card.Text>
        {/* {place?.cuisine?.map(({ name }) => {
        <Card.Text key={name} size="small" label={name}></Card.Text>
      })} */}

      <Button id={place.location_id} onClick={navigateToDetails}> View Details</Button>
      </Card.Body>
      
    </Card>
  )
}
