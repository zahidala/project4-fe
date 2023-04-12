import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewDetails.css';
import { Button } from 'react-bootstrap';
import ReviewCreateForm from '../reviews/ReviewCreateForm'
import { useNavigate } from "react-router-dom";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/get-details';

const fetchPlaceData = async (id) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        location_id: id,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function ViewDetails() {

  
    const navigate = useNavigate()
  // To go to plan form
  const planForm = (event) => {
    let id = event.currentTarget.id
    console.log(id)
    navigate(`/plan/` )
  }
  
  const id = useParams().id;
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      const data = await fetchPlaceData(id);
      setPlace(data);
      setLoading(false);
    };

    fetchPlace();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>Place not found</div>;
  }




  return (
<>
{/* <section id="about" class="section ">
      <div class="container mt-5">
          <div class="row text-center text-md-left">
              <div class="col-md-3">
                  <img src={place.photo.images.original.url} alt={place.name} class="img-thumbnail mb-4"/>
              </div>
              <div class="pl-md-4 col-md-9">
                  <h6 class="title">{place.name}</h6>
                  <p class="subtitle">Address: {place.address}</p>
                  <p>Phone: {place.phone} <br></br> </p>
                  <p>Description: {place.description}</p>
      <p>Phone: {place.phone}</p>
      <p>Website: <a href={place.website} target="_blank" rel="noreferrer">{place.website}</a></p>
      <p>Price: {place.price_level}</p>
      <p>Ranking: {place.ranking}</p>
      <p>Rating: {place.rating}</p>
      <p>Reviews: {place.num_reviews}</p>
      <p>Location: {place.location_string}</p>
      <p>Is Open: {place.is_open_now ? 'Yes' : 'No'}</p>
      <p>Category: {place.category.name}</p>
      <Button >Add to plan</Button>
              </div>
          </div>
      </div>
  </section> */}

    <div className="view-details">
      <h1>{place.name}</h1>
      <img src={place.photo.images.original.url} alt={place.name} className="place-image" />
      <p>Address: {place.address}</p>
      <p>Description: {place.description}</p>
      <p>Phone: {place.phone}</p>
      <p>Website: <a href={place.website} target="_blank" rel="noreferrer">{place.website}</a></p>
      <p>Price: {place.price}</p>
      <p>Ranking: {place.ranking}</p>
      <p>Rating: {place.rating}</p>
      <p>Reviews: {place.num_reviews}</p>
      <p>Location: {place.location_string}</p>
      <p>Is Open: {place.is_open_now ? 'Yes' : 'No'}</p>
      <p>Category: {place.category.name}</p>
      <Button  onClick={planForm}>Add To Plan</Button>
      <ReviewCreateForm></ReviewCreateForm>
    </div>
    </>
  );

}
