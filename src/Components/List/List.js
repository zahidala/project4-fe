import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

import {Form, Container} from 'react-bootstrap'

export default function List({ places, childClicked, isLoading, type, setType, rating, setRating }) {
  const classes = useStyles()
  
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
    <div className='listdiv'>
      <Form.Select aria-label="Default select example" value={type} onChange={(e) => setType(e.target.value)}>
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
    </div>

    <Container spacing={3} className={classes.list}>
         {places?.map((place, i) => (
           <Container ref={elRefs[i]} key={i} xs={12}>
             <PlaceDetails 
             place={place}
             selected={Number(childClicked) === i}
             refProp={elRefs[i]} 
             />
           </Container> 
         ))}
    </Container>
</>
      )}
    </div>
  );
}
