import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'
<<<<<<< HEAD
=======

import {Form, Container} from 'react-bootstrap'
>>>>>>> 0c7fc2216f2a77019a46c40f6be654e8d40f3750

export default function List() {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const places = [
    { name: 'Cool Place'},
    { name: 'Best Beer'},
    { name: 'Best Steak'},
  ]

  return (
<<<<<<< HEAD
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onchange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={rating} onchange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid> 
        ))}
      </Grid>
=======
    // <div className={classes.container}>
    //   <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
    //   <FormControl className={classes.formControl}>
    //     <InputLabel>Type</InputLabel>
    //     <Select value={type} onchange={(e) => setType(e.target.value)}>
    //       <MenuItem value="restaurants">Restaurants</MenuItem>
    //       <MenuItem value="hotels">Hotels</MenuItem>
    //       <MenuItem value="attractions">Attractions</MenuItem>
    //     </Select>
    //   </FormControl>

    //   <FormControl className={classes.formControl}>
    //     <InputLabel>Type</InputLabel>
    //     <Select value={rating} onchange={(e) => setRating(e.target.value)}>
    //       <MenuItem value={0}>All</MenuItem>
    //       <MenuItem value={3}>Above 3.0</MenuItem>
    //       <MenuItem value={4}>Above 4.0</MenuItem>
    //       <MenuItem value={4.5}>Above 4.5</MenuItem>
    //     </Select>
    //   </FormControl>

    //   <Grid container spacing={3} className={classes.list}>
    //     {places?.map((place, i) => (
    //       <Grid item key={i} xs={12}>
    //         <PlaceDetails place={place} />
    //       </Grid> 
    //     ))}
    //   </Grid>
    // </div>
    
    <div className='listdiv'>
      <Form.Select aria-label="Default select example" value={type} onchange={(e) => setType(e.target.value)}>
      <option value="restaurants">Restaurants</option>
      <option value="hotels">Hotels</option>
      <option value="attractions">Attractions</option>
    </Form.Select>

    <Form.Select aria-label="Default select example" value={rating} onchange={(e) => setRating(e.target.value)}>
      <option value={0}>All</option>
      <option value={3}>Above 3.0</option>
      <option value={4}>Above 4.0</option>
      <option value={4.5}>Above 4.5</option>
    </Form.Select>

    <Container spacing={3} className={classes.list}>
         {places?.map((place, i) => (
           <Container key={i} xs={12}>
             <PlaceDetails place={place} />
           </Container> 
         ))}
    </Container>


>>>>>>> 0c7fc2216f2a77019a46c40f6be654e8d40f3750
    </div>
  )
}
