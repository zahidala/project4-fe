
import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import useStyles from './styles.js';
import ViewDetails from '../ViewDetails/ViewDetails.js';
import { useNavigate } from "react-router-dom";

export default function PlaceDetails({ place, selected, refProp }) {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();
  console.log(place)

  const navigate = useNavigate()

  // To view the details of each place
  const navigateToDetails = (event) => {
    let id = event.currentTarget.id
    console.log(id)
    navigate(`/viewdetails/${place.location_id}` )
  }
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
      </CardContent>
      <CardActions>
        <Button id={place.location_id} onClick={navigateToDetails}> View Details</Button>
      </CardActions>

    </Card>
    )
}
