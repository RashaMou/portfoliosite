import * as React from "react"
import animation from "../images/animation.png"
import foodieFun from "../images/foodie-fun.png"
import key from "../images/key.png"
import phillymarkets from "../images/phillymarkets.png"
import pokedex from "../images/pokedex.png"

const Projects = () => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-flex-container">
        <div>
          <div className="project proj-1" id="key">
            <h3>Key Conservation</h3>
            <img className="project-image" src={key} alt="Key Conservation" />
          </div>
          <div className="text-container">
            <p>
              As a contractor for{" "}
              <a
                className="project-text-link project-link"
                href="https://www.keyconservation.org"
              >
                Key Conservation
              </a>
              , I collaborated with a team of engineers remotely on a mobile app
              that helps conservationists gain critical funding and global
              support. The app connects them with supporters who want to donate
              money or volunteer their time or skills to specific campaigns. I
              delivered core app features on both the React Native front-end and
              the Node backend. I also designed and built the core admin
              interface for the app, as well as overhauled the organization sign
              up process.
            </p>
            <div className="links-container">
              <a href="https://www.keyconservation.org">
                <p className="project-link view-project">VIEW PROJECT >></p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="project proj-2">
            <h3>Philly Farmer's Markets</h3>
            <img
              className="project-image"
              src={phillymarkets}
              alt="Philly Farmer's Markets"
            />
          </div>
          <p>
            Personal project app that displays farmer's markets in Philadelphia
            on a map with various display filters. The data is pulled from
            OpenDataPhilly using an ArcGIS API. Built using React and Context
            API with Google Maps API integration.
          </p>
          <a href="https://github.com/RashaMou/philly-farmers-markets">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://www.phillyfarmersmarkets.com">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
        {/* <div>
          <div className="project proj-3">
            <h3>Weather App</h3>
            <img className="project-image" src={weather} alt="Weather-app" />
          </div>
          <p>
            Weather app built with React, Context API, Dark Sky API, and
            Node/Express backend. The app has a dynamic background that displays
            a satellite view of the entered location using the Google Maps API.
          </p>
          <a href="https://github.com/RashaMou/weather-app">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://rasha-weather.netlify.app/">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div> */}
        <div>
          <div className="project proj-3">
            <h3>Framer Motion Animations</h3>
            <img
              className="project-image"
              src={animation}
              alt="animation-showcase"
            />
          </div>
          <p>
            A toy project to showcase some basic animations in React with the
            framer motion library.
          </p>
          <a href="https://github.com/RashaMou/framer-motion-pizza">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://xenodochial-curie-518305.netlify.app/">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
        <div>
          <div className="project proj-4">
            <h3>Foodie Fun</h3>
            <img className="project-image" src={foodieFun} alt="FoodieFun" />
          </div>
          <p>
            This was a project I completed during my time at{" "}
            <a
              className="project-text-link project-link"
              href="https://www.lambdaschool.com"
            >
              Lambda School
            </a>
            . I collaborated remotely with a team of 5 developers as lead
            backend developer. I designed and implemented the backend of a food
            journaling app that authenticates user and allows them to record
            details, upload photos, and rate restaurants they have visited.
            Built using Node and Express with a Postgres database. Deployed
            backend to Heroku.
          </p>
          <a href="https://github.com/Build-Week-Foodie-Fun-4/Back-End">
            <p className="project-source project-link">SOURCE >></p>
          </a>
        </div>
        <div>
          <div className="project proj-2">
            <h3>Pokedex</h3>
            <img className="project-image" src={pokedex} alt="Pokedex" />
          </div>
          <p>
            Fully responsive Pokedex built with React, Context API, MaterialUI
            and PokeApi. Custom hooks save user theme preference in local
            storage.
          </p>
          <a href="https://github.com/RashaMou/pokedex">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://unruffled-mcnulty-29f3ec.netlify.app/">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
