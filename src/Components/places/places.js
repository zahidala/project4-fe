import List from './Components/List/List'
import Map from './Components/Map/Map'

import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places}/>
         <Container>
            <List places={places} />
        </Container>
      </div>
    )
  }
}
