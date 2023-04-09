import React from 'react'
import GoogleMapReact from 'google-map-react';

export default function Map() {
  const coordinates = { lan: 0, lng: 0}
  return (
    <div>
      <GoogleMapReact 
      bootstrapURLKeys={{ key : ''}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={''}
      onChildClick={''}
      >
      </GoogleMapReact>
    </div>

  )
}
