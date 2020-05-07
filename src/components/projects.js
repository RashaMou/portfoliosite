import * as React from "react"
import placeholder from "../images/placeholder.png"
import phillymarkets from "../images/phillymarkets.png"
import key from "../images/key.webp"

const Projects = () => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-flex-container">
        <div>
          <div className="project proj-1">
            <h3>Key Conservation</h3>
            <img className="placeholder" src={key} alt="Key Conservation" />
          </div>
          <p>
            Doggo ipsum extremely cuuuuuute woofer such treat vvv doing me a
            frighten I am bekom fat, big ol puggorino heckin good boys and
            girls. Most angery pupper I have ever seen smol borking doggo with a
            long snoot for pats floofs woofer most angery pupper I have ever see
          </p>
          <a href="#">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://www.keyconservation.org">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
        <div>
          <div className="project proj-2">
            <h3>Philly Farmer's Markets</h3>
            <img
              className="placeholder"
              src={phillymarkets}
              alt="Philly Farmer's Markets"
            />
          </div>
          <p>
            Doggo ipsum extremely cuuuuuute woofer such treat vvv doing me a
            frighten I am bekom fat, big ol puggorino heckin good boys and
            girls. Most angery pupper I have ever seen smol borking doggo with a
            long snoot for pats floofs woofer most angery pupper I have ever see
          </p>
          <a href="#">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="https://www.phillyfarmersmarkets.com">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
        <div>
          <div className="project proj-3">
            <h3>Weather App</h3>
            <img className="placeholder" src={placeholder} alt="placeholder" />
          </div>
          <p>
            Doggo ipsum extremely cuuuuuute woofer such treat vvv doing me a
            frighten I am bekom fat, big ol puggorino heckin good boys and
            girls. Most angery pupper I have ever seen smol borking doggo with a
            long snoot for pats floofs woofer most angery pupper I have ever see
          </p>
          <a href="#">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="#">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
        <div>
          <div className="project proj-4">
            <h3>Food Truck Trackr</h3>
            <img className="placeholder" src={placeholder} alt="placeholder" />
          </div>
          <p>
            Doggo ipsum extremely cuuuuuute woofer such treat vvv doing me a
            frighten I am bekom fat, big ol puggorino heckin good boys and
            girls. Most angery pupper I have ever seen smol borking doggo with a
            long snoot for pats floofs woofer most angery pupper I have ever see
          </p>
          <a href="#">
            <p className="project-source project-link">SOURCE >></p>
          </a>
          <a href="#">
            <p className="project-link view-project">VIEW PROJECT >></p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
