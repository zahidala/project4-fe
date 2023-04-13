<a name="readme-top"></a>

<div align="center">
  <a href="#">
    <img src="https://i.ibb.co/yRkszL6/travel-buddy.png" alt="Logo">
  </a>

  <h3 align="center">Travel Buddy</h3>

  <p align="center">
  It is the ultimate travel companion for planning and experiencing unforgettable adventures. Inspired by the renowned TripAdvisor, our app is the go-to app for exploring new destinations, finding the best accommodations, restaurants, and attractions, all based on authentic traveler reviews and recommendations.
  </p>
</div>
<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#team-members">Team Members</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <ul>
        <li><a href="#deployed-app">Deployed App</a></li>
        <li><a href="#trello">Trello</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
    </ul>
    <li><a href="#application-architecture">Application Architecture</a></li>
    <ul>
        <li><a href="#entity-relationship-diagram">Entity Relationship Diagram</a></li>
        <li><a href="#wireframes">Wireframes</a></li>
    </ul>
    <li><a href="#unsolved-problems">Unsolved Problems</a></li>
    <li><a href="#users-stories">Users Stories</a></li>
    <li><a href="#general-approach">General Approach</a></li>
    <li><a href="#overcoming-challenges">Overcoming Challenges</a></li>
    <li><a href="#future-enhancements">Future Enhancements</a></li>
  </ol>
</details>

## Technologies Used

[![HTML5](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML)

[![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)

[![BootStrap5](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://www.getbootstrap.com)

[![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/core/)

[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)

[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)


## Team Members

- Zahid Allaulddin | [@zahidala](https://github.com/zahidala)
- Jehan Ali | [@JEHANALIK](https://github.com/JEHANALIK)
- Hajar Mohammed | [@hajrmohamed](https://github.com/hajrmohamed)
- Nadia Husain | [@nadia-husain](https://github.com/nadia-husain)
- Noor Al-Hajri | [@nooralhajri](https://github.com/nooralhajri)

## Getting Started

### Deployed App

Link to be added here

### Trello

[Trello Link](https://trello.com/invite/b/9IzqZ8mT/ATTI8f1126078046018e82cc3b85f40fa229211AA0D3/project4)

### Prerequisites

Ensure you have the latest version of `npm` installed by running this command:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key for Travel Advisor [here](https://rapidapi.com/apidojo/api/travel-advisor)
2. Get a free API Key for Google Maps [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
3. Get a free API Key for OpenWeatherMap [here](https://openweathermap.org/appid)
4. Clone the required repos

   ```sh
   git clone https://github.com/zahidala/project4-fe.git
   ```
    ```sh
   git clone https://github.com/zahidala/project4BE.git
   ```
5. Install NPM packages
    ```sh
    npm install
    ```
6. Enter your API keys in an `.env` file
   ```sh
   REACT_APP_GOOGLE_MAPS_API_KEY='ENTER YOUR KEY HERE'
   REACT_APP_TRAVEL_ADVISOR='ENTER YOUR KEY HERE'
   REACT_APP_WEATHER_API_KEY='ENTER YOUR KEY HERE'
   ```

## Application Architecture

### <ins>Entity Relationship Diagram</ins>

![ERD](https://i.ibb.co/0hsDfW8/project4-2-drawio.png)

### <ins>Wireframes</ins>

![HomePage](https://i.ibb.co/cwK23C7/React-App.png)

## Unsolved Problems

- [ ] Inability to display user data on calendar
- [ ] Diffculty in implementing reviews

## Users Stories

- [x] As a User, I want to be able to search for locations
- [x] As a User, I want to be able to look up places based on my current location or location that I searched for.
- [x] As a User, I want to be able to sign up, sign in and logout
- [x] As a User, I want to be able to view details of specfic places: hotels, attractions, restaurants.
- [x] As a User, I want to be able to add places to my travel plan.
- [x] As a User, I want to be able edit my travel plan
- [x] As a User, I want to be able to view all places that were added to travel plan

## General Approach

As a team, we first decided the best way to apporoach this project was to think of an idea for a website. We also researched on what APIs would work best to get the data we need. Once we had figured that out we then focused on wireframes by drawing them on Figma. Later we used [draw.io](draw.io) to make the Entity Relationship Diagram. To keep track of our progress and divide the work between each other we used [Trello](https://trello.com/).

## Overcoming Challenges

- Grabbing the relevant data of the place directly from the API that after user clicks on Add To Plan to populate some fields of the form with the data needed.

## Future Enhancements

- Adding ability for the user to leave a review for a place on the view details page of each place.
- Displaying added plan data on the calendar section of the website.

<p align="right">(<a href="#readme-top">Back To Top</a>)</p>