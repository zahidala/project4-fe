import React from 'react'
import { Card } from 'react-bootstrap'

export default function PlaceDetails({ place }) {
  console.log(place)
  return (
    <Card elevation={6}>
      <Card.Img style={{ height: 350 }} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}/>
      <Card.Title>{place.name}</Card.Title>
    </Card>
  )
}
