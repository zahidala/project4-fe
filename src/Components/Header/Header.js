import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import useStyles from './styles'
import Map from '../Map/Map'
import { useState, useEffect } from 'react'
import List from '../List/List'
import { getPlacesData } from '../../api';

export default function Header() {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')

  
  // const [autocomplete, setAutocomplete] = useState(null)

  // const onLoad = (autoC) => setAutocomplete(autoC)
  // console.log('on', onLoad)
  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat()
  //   const lng = autocomplete.getPlace().geometry.location.lng()
  //   setCoordinates({ lat, lng})
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude })

    })
  }, [])

  useEffect(() => {
    setIsLoading(true)

    getPlacesData(type, bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data)
      setPlaces(data)
      setIsLoading(false)
    })
  }, [type, coordinates, bounds])

  return (
    <>
    <div id="intro" class="bg-image">
    <div class="mask text-white">
      <div class="container d-flex align-items-center text-center h-100">
        <div>
          <p>Plan you next trip with us!</p>
        </div>
        <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Autocomplete> */}
            <Button variant="outline-success">Search</Button>
            {/* </Autocomplete> */}
          </Form>
        </div>
      </div>
    </div>
  </div>

  <div>
    <Map 
    setCoordinates={setCoordinates} 
    setBounds={setBounds} 
    coordinates={coordinates} 
    places={places}
    setChildClicked={setChildClicked}
    />
    <Container>
      <List 
      places={places}
      childClicked={childClicked}
      isLoading={isLoading}
      type={type}
      setType={setType}
      rating={rating}
      setRating={setRating}
       />
    </Container>
  </div>
  </>
)
}
